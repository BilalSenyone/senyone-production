import { jsPDF } from 'jspdf';

type QuestionAnswer = number | string | number[];

interface SavingsData {
  weeklyCost: number;
  annualCost: number;
  automatableHours: number;
  weeklySavings: number;
  annualSavings: number;
  roi: number;
  paybackPeriod: number;
}

interface AnswersData {
  volume: QuestionAnswer;
  cout: QuestionAnswer;
  taux: QuestionAnswer;
}

export const usePDFGenerator = () => {
  const generatePDFReport = (
    answers: AnswersData,
    savings: SavingsData,
    fileName: string = `analyse-automatisation-${Date.now()}`
  ) => {
    const doc = new jsPDF();
    
    // Configuration des couleurs
    const primaryColor = [0, 146, 158]; // #00929E
    const lightColor = [230, 246, 247]; // #E6F6F7
    
    // Couverture
    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.rect(0, 0, 210, 297, 'F');
    
    // Titre sur la couverture
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('RAPPORT D\'ANALYSE', 105, 100, { align: 'center' });
    
    doc.setFontSize(18);
    doc.text('D\'AUTOMATISATION', 105, 120, { align: 'center' });
    
    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.text(`Généré le ${new Date().toLocaleDateString('fr-FR')}`, 105, 140, { align: 'center' });
    
    // Numéro de simulation
    doc.setFontSize(12);
    doc.text(`Simulation n°#${Date.now().toString().slice(-6)}`, 105, 160, { align: 'center' });
    
    // Nouvelle page pour le contenu principal
    doc.addPage();
    doc.setFillColor(255, 255, 255);
    doc.rect(0, 0, 210, 297, 'F');
    
    let yPosition = 20;
    
    // En-tête de section
    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.rect(20, yPosition, 170, 12, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('DONNÉES D\'ENTRÉE', 105, yPosition + 8, { align: 'center' });
    
    yPosition += 22;
    
    // Données d'entrée
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    
    const inputData = [
      { label: 'Heures répétitives par semaine', value: `${answers.volume}h` },
      { label: 'Coût horaire moyen', value: `${answers.cout} FCFA/h` },
      { label: 'Taux d\'automatisation estimé', value: `${answers.taux}%` }
    ];
    
    inputData.forEach((item, index) => {
      doc.setFillColor(lightColor[0], lightColor[1], lightColor[2]);
      doc.rect(20, yPosition + (index * 18), 170, 16, 'F');
      
      doc.setTextColor(0, 0, 0);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.text(item.label, 25, yPosition + (index * 18) + 10);
      
      doc.setFont('helvetica', 'bold');
      doc.text(item.value, 175, yPosition + (index * 18) + 10, { align: 'right' });
    });
    
    yPosition += 70;
    
    // Section résultats
    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.rect(20, yPosition, 170, 12, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('RÉSULTATS', 105, yPosition + 8, { align: 'center' });
    
    yPosition += 22;
    
    // Résultats principaux
    const resultsData = [
      { label: 'Temps automatisable', value: `${savings.automatableHours}h/semaine` },
      { label: 'Économies hebdomadaires', value: `${savings.weeklySavings.toLocaleString()} FCFA` },
      { label: 'Économies annuelles', value: `${savings.annualSavings.toLocaleString()} FCFA` },
      { label: 'ROI estimé', value: `${savings.roi}%` },
      { label: 'Période de retour', value: `${savings.paybackPeriod} mois` }
    ];
    
    resultsData.forEach((item, index) => {
      doc.setFillColor(lightColor[0], lightColor[1], lightColor[2]);
      doc.rect(20, yPosition + (index * 18), 170, 16, 'F');
      
      doc.setTextColor(0, 0, 0);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.text(item.label, 25, yPosition + (index * 18) + 10);
      
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
      doc.text(item.value, 175, yPosition + (index * 18) + 10, { align: 'right' });
    });
    
    yPosition += 110;   
    yPosition += 22;
    
    // Recommandations personnalisées basées sur les données
    const getPersonalizedRecommendations = () => {
      const recommendations = [];
      
      // Recommandations basées sur le volume d'heures
      if (savings.automatableHours < 10) {
        recommendations.push('1. Commencez petit : identifiez 2-3 tâches très répétitives à automatiser en priorité');
      } else if (savings.automatableHours < 30) {
        recommendations.push('1. Ciblez les processus à fort impact : automatisation des tâches administratives et reporting');
      } else {
        recommendations.push('1. Optez pour une approche globale : planifiez une transformation digitale complète');
      }
      
      // Recommandations basées sur le coût horaire
      if (answers.cout as number < 50) {
        recommendations.push('2. Priorisez les solutions low-cost : outils open-source et automation scripts');
      } else if (answers.cout as number < 100) {
        recommendations.push('2. Investissez dans des outils middleware : RPA et intégrations API');
      } else {
        recommendations.push('2. Envisagez des solutions enterprise : plateformes d\'automatisation complètes');
      }
      
      // Recommandations basées sur le taux d'automatisation
      if (answers.taux as number < 50) {
        recommendations.push('3. Formez votre équipe : sensibilisez aux bénéfices et bonnes pratiques');
      } else if (answers.taux as number < 80) {
        recommendations.push('3. Mettez en place un centre d\'excellence : expertise interne partagée');
      } else {
        recommendations.push('3. Créez une culture de l\'innovation : encouragez l\'automatisation continue');
      }
      
      // Recommandations basées sur le ROI
      if (savings.roi < 50) {
        recommendations.push('4. Suivez les KPIs : mesurez l\'adoption et les gains mensuellement');
      } else if (savings.roi < 150) {
        recommendations.push('4. Optimisez continuellement : réévaluez les processus chaque trimestre');
      } else {
        recommendations.push('4. Étendez l\'automatisation : explorez d\'autres départements et fonctions');
      }
      
      // Recommandation temporelle universelle
      recommendations.push(`5. Planifiez sur ${Math.ceil(savings.paybackPeriod/3)} trimestres : déploiement progressif par vagues`);
      
      return recommendations;
    };
    
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    
    const recommendations = getPersonalizedRecommendations();
    
    // Nouvelle page pour les recommandations
    doc.addPage();
    doc.setFillColor(255, 255, 255);
    doc.rect(0, 0, 210, 297, 'F');
    
    yPosition = 20;
    
    // Recommandations personnalisées
    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.rect(20, yPosition, 170, 12, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('RECOMMANDATIONS PERSONNALISÉES', 105, yPosition + 8, { align: 'center' });
    
    yPosition += 22;
    
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    
    recommendations.forEach((rec, index) => {
      doc.text(rec, 25, yPosition + (index * 12));
    });
    
    yPosition += 80;
    
    // Section recommandations stratégiques spécifiques
    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.rect(20, yPosition, 170, 12, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('RECOMMANDATIONS STRATÉGIQUES', 105, yPosition + 8, { align: 'center' });
    
    yPosition += 22;
    
    // Recommandation 1: Optimisation des ressources
    doc.setFillColor(230, 246, 247);
    doc.rect(20, yPosition, 170, 45, 'F');
    
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('Optimisation des ressources', 25, yPosition + 12);
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    const text1 = `En automatisant ${savings.automatableHours}h par semaine, votre équipe peut se concentrer`;
    const text2 = `sur des tâches à plus haute valeur ajoutée, augmentant ainsi la productivité globale.`;
    doc.text(text1, 25, yPosition + 22);
    doc.text(text2, 25, yPosition + 30);
    
    doc.setFont('helvetica', 'bold');
    doc.text('Impact immédiat sur la productivité', 25, yPosition + 40);
    
    yPosition += 55;
    
    // Recommandation 2: Plan d'implémentation
    doc.setFillColor(230, 246, 247);
    doc.rect(20, yPosition, 170, 45, 'F');
    
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('Plan d\'implémentation', 25, yPosition + 12);
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text('Commencez par automatiser les processus les plus répétitifs dans un délai de 30 jours', 25, yPosition + 22);
    doc.text('pour un retour sur investissement rapide.', 25, yPosition + 30);
    
    doc.setFont('helvetica', 'bold');
    doc.text('Délai de mise en œuvre : 1-3 mois', 25, yPosition + 40);
    
    // Pied de page
    const pageCount = doc.internal.pages.length - 1; // jsPDF pages array includes empty first page
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setTextColor(128, 128, 128);
      doc.setFontSize(8);
      doc.text(`Page ${i} / ${pageCount}`, 105, 285, { align: 'center' });
      doc.text('© Senyone - Rapport confidentiel', 105, 290, { align: 'center' });
    }
    
    // Sauvegarder le PDF
    doc.save(`${fileName}.pdf`);
  };
  
  return { generatePDFReport };
};
