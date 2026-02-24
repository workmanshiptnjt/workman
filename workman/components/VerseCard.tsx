interface VerseCardProps {
  book: string;
  chapter: number;
  verse: number;
  text: string;
}

export default function VerseCard({ book, chapter, verse, text }: VerseCardProps) {
  return (
    <div className="card bg-gradient-to-br from-purple-900/40 to-purple-900/20 border-l-4 border-purple-500">
      <p className="text-purple-400 font-bold mb-4">
        {book} {chapter}:{verse}
      </p>
      <p className="text-xl leading-relaxed italic text-gray-200 mb-4">
        "{text}"
      </p>
      <div className="flex gap-3">
        <button className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors">
          Save →
        </button>
        <button className="text-gray-500 hover:text-gray-400 font-medium text-sm transition-colors">
          Share →
        </button>
      </div>
    </div>
  );
}
