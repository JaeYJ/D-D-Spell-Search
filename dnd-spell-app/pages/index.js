// pages/index.js
import SpellList from '../components/SpellList'; 
import '../app/globals.css'

const spells = {
  cleric: {
    'Cantrips (0 Level)': ['Guidance', 'Light', 'Resistance', 'Sacred Flame', 'Thaumaturgy', 'Healing Word'],
    '1st Level': ['Bless', 'Command', 'Cure Wounds', 'Detect Magic', 'Guiding Bolt', 'Inflict Wounds'],
    '2nd Level': ['Aid', 'Augury', 'Hold Person', 'Lesser Restoration', 'Prayer of Healing', 'Silence'],
    '3rd Level': ['Beacon of Hope', 'Dispel Magic', 'Mass Healing Word', 'Protection from Energy', 'Revivify', 'Spirit Guardians'],
  },
  wizard: {
    'Cantrips (0 Level)': ['Dancing Lights', 'Light', 'Mage Hand', 'Prestidigitation', 'Ray of Frost', 'Shocking Grasp'],
    '1st Level': ['Burning Hands', 'Charm Person', 'Comprehend Languages', 'Detect Magic', 'Identify', 'Mage Armor'],
    '2nd Level': ['Blur', 'Darkness', 'Flaming Sphere', 'Hold Person', 'Invisibility', 'Misty Step'],
    '3rd Level': ['Dispel Magic', 'Fireball', 'Fly', 'Lightning Bolt', 'Protection from Energy'],
  },
};

export default function Home() {
  return (
    <div>
      <SpellList spells={spells} />
    </div>
  );
}
