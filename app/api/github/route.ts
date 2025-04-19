import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const { username } = await request.json()
        
        const today = new Date()
        const oneYearAgo = new Date()
        oneYearAgo.setDate(oneYearAgo.getDate() - 365)
        const startDate = oneYearAgo.toISOString()

        const graphqlQuery = {
            query: `
                query($username: String!, $from: DateTime!) {
                    user(login: $username) {
                        contributionsCollection(from: $from) {
                            contributionCalendar {
                                totalContributions
                                weeks {
                                    contributionDays {
                                        contributionCount
                                        date
                                    }
                                }
                            }
                            totalCommitContributions
                            totalIssueContributions
                            totalPullRequestContributions
                            totalPullRequestReviewContributions
                            restrictedContributionsCount
                        }
                    }
                }
            `,
            variables: {
                username: username,
                from: startDate
            }
        }

        const [userResponse, contributionsResponse] = await Promise.all([
            fetch(`https://api.github.com/users/${username}`),
            fetch('https://api.github.com/graphql', {
                method: 'POST',
                headers: {
                    'Authorization': `bearer ${process.env.GITHUB_TOKEN}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(graphqlQuery)
            })
        ])

        const userData = await userResponse.json()
        const contributionsData = await contributionsResponse.json()

        if (userResponse.status === 404) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 })
        }

        if (!userResponse.ok || !contributionsResponse.ok) {
            return NextResponse.json({ error: 'Failed to fetch GitHub data' }, { status: 500 })
        }

        const starredResponse = await fetch(`https://api.github.com/users/${username}/starred`)
        const starredData = await starredResponse.json()

        return NextResponse.json({
            ...userData,
            stars: starredData.length,
            contributions: contributionsData.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions ?? 0,
            contributionCalendar: contributionsData.data?.user?.contributionsCollection?.contributionCalendar
        })
    } catch (error) {
        console.error('Error fetching GitHub data:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
} 