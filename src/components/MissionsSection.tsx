import { MissionCard } from './MissionCard';
import { Target, BarChart2, Users as TeamIcon } from 'lucide-react';

export const MissionsSection = () => {
  const missions = [
    {
      icon: <Target className='w-10 h-10 text-white'/>,
      title: "Notre Mission",
      description: "Accompagner les entreprises dans leur transformation numérique en proposant des solutions innovantes et sur mesure qui répondent à leurs défis spécifiques.",
      color: "bg-purple-600"
    },
    {
      icon: <BarChart2 className="w-10 h-10 text-[#00929E]" />,
      title: "Notre Vision",
      description: "Devenir un acteur clé de l'innovation en Afrique de l'Ouest en démocratisant l'accès aux technologies de pointe pour tous les entrepreneurs de la région.",
      color: "bg-indigo-600"
    },
    {
      icon: <TeamIcon className="w-10 h-10 text-white" />,
      title: "Notre Engagement",
      description: "Mettre notre expertise au service de votre réussite, en construisant des partenariats durables basés sur la confiance et l'excellence opérationnelle.",
      color: "bg-blue-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-start mb-4">
          <h2 className="text-xl md:text-3xl font-neue-plak font-bold text-gray-900 mb-4">Nos Missions</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {missions.map((mission, index) => (
            <MissionCard
              key={index}
              icon={mission.icon}
              title={mission.title}
              description={mission.description}
              color={mission.color}
              variant={index % 2 !== 0 ? 'gradient' : 'white'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
