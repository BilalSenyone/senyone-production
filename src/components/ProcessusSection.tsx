import React from 'react';

interface EtapeProcessus {
  id: number;
  titre: string;
  description: string;
  icone: React.ReactNode;
}

const CarteEtape: React.FC<{ etape: EtapeProcessus; estDerniere: boolean; pos: boolean }> = ({ etape, estDerniere, pos }) => (
  <div className="relative">
    <div className={
      pos?
      "ml-60 bg-white rounded-l-[150px] pl-20 p-8 shadow-md border border-gray-100":
      "mr-60 bg-white rounded-r-[150px] pr-20 p-8 shadow-md border border-gray-100"
      }>
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-full bg-teal-50 flex items-center justify-center">
            {etape.icone}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{etape.titre}</h3>
          <p className="text-gray-600 leading-relaxed">{etape.description}</p>
        </div>
      </div>
    </div>
    
    {!estDerniere && (
      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-teal-500">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    )}
  </div>
);


export const ProcessusSection = () => {

    const etapesProcessus: EtapeProcessus[] = [
      {
        id: 1,
        titre: "Repérage des processus",
        description: "Analyser le flux de travail actuel de bout en bout, en identifiant toutes les tâches, les décisions, les applications utilisées et les personnes impliquées. Un processus idéal est répétitif, basé sur des règles claires, stable et à volume élevé. Cette phase permet de définir clairement le périmètre du projet et d'estimer le potentiel de gain, posant ainsi les bases solides pour les étapes suivantes.",
        icone: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#0D9488"/>
            <path d="M12 7C11.45 7 11 7.45 11 8V13C11 13.55 11.45 14 12 14C12.55 14 13 13.55 13 13V8C13 7.45 12.55 7 12 7Z" fill="#0D9488"/>
            <path d="M13 16C13 16.55 12.55 17 12 17C11.45 17 11 16.55 11 16C11 15.45 11.45 15 12 15C12.55 15 13 15.45 13 16Z" fill="#0D9488"/>
          </svg>
        )
      },
      {
        id: 2,
        titre: "Analyse du ROI",
        description: "Évaluer la viabilité économique en comparant les coûts de développement (ressources, licences) aux bénéfices attendus (gain de temps, réduction d'erreurs). Ce calcul permet de prioriser les projets et de justifier l'investissement par un retour sur investissement mesurable. Des objectifs de performance mesurables pour le projet.",
        icone: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3V21H21" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 9L15 13.17L11 9.17001L7 14" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )
      },
      {
        id: 3,
        titre: "Prototype agile",
        description: "Développer rapidement un automate de base fonctionnel pour valider le concept auprès des utilisateurs. Cette approche itérative, centrée sur le feedback, permet d'ajuster la solution en temps réel et de s'assurer qu'elle répond parfaitement aux besoins métier avant le développement complet.",
        icone: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3V21H21" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 9L15 13.17L11 9.17001L7 14" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )
      },
      {
        id: 4,
        titre: "Implémentation",
        description: "Finaliser le développement du robot en gérant tous les scénarios, y compris les exceptions. Des tests rigoureux (intégration, performance, acceptation utilisateur) sont menés pour garantir une solution robuste, sécurisée et prête pour un déploiement en production sans risque.",
        icone: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3V21H21" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 9L15 13.17L11 9.17001L7 14" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )
      },
      {
        id: 5,
        titre: "Déploiement et support",
        description: "Mettre l'automate en service de manière contrôlée. Assurer ensuite son monitoring continu, son maintien en condition opérationnelle et son évolution face aux changements du processus. Le support garantit la réalisation des bénéfices sur le long terme.",
        icone: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3V21H21" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 9L15 13.17L11 9.17001L7 14" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )
      }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-12">
        {etapesProcessus.map((etape, index) => (
          <CarteEtape 
            key={etape.id} 
            etape={etape} 
            estDerniere={index === etapesProcessus.length - 1}
            pos={etape.id%2==0}
          />
        ))}
      </div>
    </div>
  );
};

export default ProcessusSection;
