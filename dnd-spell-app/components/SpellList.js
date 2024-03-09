// components/SpellList.js
import React, { useState } from 'react';

const SpellList = ({ spells }) => {
  const [selectedSpell, setSelectedSpell] = useState(null);

  return (
    <div className="max-w-800 mx-auto">
      <h1 className="text-2xl font-bold mb-4">Spell List</h1>
      <div>
        <h2 className="text-xl font-bold mb-2">Cleric Spells</h2>
        <table className="w-full border-collapse border-t border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 py-2 px-4">Spell Level</th>
              <th className="border border-gray-300 py-2 px-4">Spells</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(spells.cleric).map((level) => (
              <tr key={level}>
                <td className="border border-gray-300 py-2 px-4">{level}</td>
                <td className="border border-gray-300 py-2 px-4">
                  {spells.cleric[level].map((spell, index) => (
                    <div key={index}>
                      <button
                        className="text-blue-500 hover:underline focus:outline-none"
                        onClick={() => setSelectedSpell(spell)}
                      >
                        {spell}
                      </button>
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">Wizard Spells</h2>
        <table className="w-full border-collapse border-t border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 py-2 px-4">Spell Level</th>
              <th className="border border-gray-300 py-2 px-4">Spells</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(spells.wizard).map((level) => (
              <tr key={level}>
                <td className="border border-gray-300 py-2 px-4">{level}</td>
                <td className="border border-gray-300 py-2 px-4">
                  {spells.wizard[level].map((spell, index) => (
                    <div key={index}>
                      <button
                        className="text-blue-500 hover:underline focus:outline-none"
                        onClick={() => setSelectedSpell(spell)}
                      >
                        {spell}
                      </button>
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedSpell && (
        <div>
          <h3>{selectedSpell}</h3>
          {/* Fetch and display spell description from the Flask backend */}
        </div>
      )}
    </div>
  );
};

export default SpellList;
