import { AsciiArtGenerator } from "@/components/ui/ascii-art-generator"

export default function AsciiArtPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-white">ASCII Art Generator</h1>
      <AsciiArtGenerator />
    </div>
  )
}

