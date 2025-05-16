import { useEffect, useState } from 'react';

type Entry = {
  date: string;
  menu: string;
  note: string;
};

export default function LogsPage() {
  const [entries, setEntries] = useState<Entry[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('logEntries');
    if (saved) {
      setEntries(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">練習記録一覧</h1>
      {entries.length === 0 ? (
        <p>まだ投稿がありません。</p>
      ) : (
        entries.map((entry, index) => (
          <div key={index} className="border rounded p-3 mb-3">
            <div className="font-semibold">📅 {entry.date}</div>
            <div>🏋️ {entry.menu}</div>
            <div className="text-sm text-gray-700 mt-2">📝 {entry.note}</div>
          </div>
        ))
      )}
    </div>
  );
}
