import { Project } from "../interfaces/Project";

export const projects : Project[] = [ 
    {
        slug: "projection",
        information: {
            title: "Project'ion : Projet de site web permettant la gestion de projet pour des étudiants du BUT informatique",
            details: "IUT Lyon 1, Villeurbanne | Semestre 3 et 4 BUT informatique",
            description: "Inspirée de l'application Notion, cette application orientée IUT informatique permet de créer un espace de travail partagé pour réaliser un projet. Cet espace offre un suivi visuel et dynamique des tâches à réaliser ainsi qu'un aperçu du dépôt Git, élément primordial pour tout projet informatique.",
            languages: [
                { name: "PHP", description: "Langage serveur pour créer des sites dynamiques." },
                { name: "HTML", description: "Langage de structure des pages web." },
                { name: "CSS", description: "Langage de style pour mettre en forme les pages web." },
                { name: "JS", description: "Langage de script pour rendre les pages interactives." }
            ]
        },
        urlImage: "assets/images/Projet-WorkPlace.png",
        skills: [
            {
                id: "",
                name: "",
                description: ""
            },
        ],
        description: "Le projet Project'ion est une application web collaborative de gestion de projet pensée pour les étudiants en informatique. Dans le cadre de ce développement, j'ai été en charge de la modélisation et de l’implémentation des outils Kanban et Gantt, permettant un suivi visuel et structuré des tâches. J'ai également conçu les maquettes fonctionnelles de l'application, en veillant à l’ergonomie et à l’expérience utilisateur. Enfin, j’ai participé à l’intégration côté front-end, notamment sur le lien entre l’interface et la base de données, afin d'assurer un affichage dynamique des informations projet.",
        images: [
            "assets/images/kanban.png",
            "assets/images/connexion.png",
            "assets/images/gantt.png",
            "assets/images/projects.png"
        ]
    },
    {
        slug : "plane-air",
        information : {
            title: "Plane-Air : Projet d’application de gestion de vol",
            details: "IUT Lyon 1, Villeurbanne | Semestre 2 BUT informatique",
            description: "Permet de simuler une journée de vol grâce à l'importation de données en CSV. L'application simule le vol des avions et renvoie le nombre de collisions possibles durant cette journée. Une carte interactive permet de complexifier la simulation et de rendre l'utilisateur actif. De plus, des paramètres donnent la possibilité d'interagir avec les algorithmes de reconnaissance de collisions.",
            languages:  [
                { name: "Java", description: "Langage orienté objet utilisé pour le développement d'applications multiplateformes." }
            ]
        },
        urlImage : "assets/images/Projet-Simulation.png",
        skills : [
                {
                    id : "RC-12.1",
                    name : "Réalisation de testes vigoureux",
                    description : "Permet de simuler une journée de vol grâce à l'importation de données en CSV. L'application simule le vol des avions et renvoie le nombre de collisions possibles durant cette journée. Une carte interactive permet de complexifier la simulation et de rendre l'utilisateur actif. De plus, des paramètres donnent la possibilité d'interagir avec les algorithmes de reconnaissance de collisions."
                
                },
                {
                    id : "RC-6.122",
                    name : "Collaboration à un proket existant",
                    description : "Permet de simuler une journée de vol grâce à l'importation de"
                
                },
                {
                    id : "RC-6.122",
                    name : "Collaboration à un proket existant",
                    description : "Permet de simuler une journée de vol grâce à l'importation de zodjen^f  eairhg ârug h^ ih erig eig r heguehg hmth th "
                
                },
                {
                    id : "RC-6.122",
                    name : "Collaboration à un proket existant",
                    description : "Permet de simuler une journée de vol grâce à l'importation de zodjen^f  eairhg ârug h^ ih erig eig r heguehg hmth th lknùoze hg dhleiu h uiuh puh uherpiguhr"
                
                },

            ],
        description: "Plane-Air est un projet académique développé dans le cadre du semestre 2 du BUT Informatique à l’IUT Lyon 1 de Villeurbanne. Ce projet avait pour objectif de créer une application capable de simuler une journée de trafic aérien à partir de données d’entrée fournies en CSV. L'application analyse les trajectoires des avions et détecte les éventuelles collisions. Elle offre une carte interactive qui permet de visualiser les déplacements, tout en donnant à l'utilisateur la possibilité de modifier les paramètres de simulation pour tester différents scénarios. Dans ce projet, j’ai été responsable de la conception de l’interface utilisateur en Java à l’aide des bibliothèques Swing et AWT. J’ai également participé à la rédaction des maquettes et à la définition fonctionnelles du logiciel. Enfin, j’ai mis en œuvre l’algorithme DSATUR (coloration de graphes) pour optimiser la gestion des trajectoires et réduire le nombre de collisions potentielles.",
        images : [
            "assets/images/parametres.png",
            "assets/images/pop-up-info.png",
            "assets/images/import.png",
            "assets/images/graph.png",
        ]
    },
  ]