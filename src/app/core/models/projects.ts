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
        skillsSection : [
            {
                title : "Réaliser",
                skills : [
                    {
                        id: "AC11.01 | Nv1",
                        name: "Implémenter des conceptions simples",
                        description: "J’ai implémenté les modules Kanban et Gantt à partir des maquettes conçues, en respectant les attentes définies lors des réunions agiles."
                    },
                    {
                        id: "AC11.02 | Nv1",
                        name: "Élaborer des conceptions simples",
                        description: "J’ai participé à la conception des interfaces de gestion de tâches, en transformant les besoins utilisateurs exprimés lors des sprints en prototypes fonctionnels."
                    },
                    {
                        id: "AC11.04 | Nv1",
                        name: "Développer des interfaces utilisateurs",
                        description: "J’ai contribué à l’interface dynamique du tableau de bord, connectée à la base de données, en intégrant des vues de type Kanban interactives."
                    },
                    {
                        id: "AC21.03 | Nv2",
                        name: "Adopter de bonnes pratiques de conception et de programmation",
                        description: "J’ai structuré mon code en respectant des normes de lisibilité et de modularité pour faciliter les évolutions en mode agile."
                    },
                    {
                        id: "AC21.04 | Nv2",
                        name: "Vérifier et valider la qualité de l’application par les tests",
                        description: "Des tests fonctionnels ont été réalisés à chaque fin de sprint pour valider les tâches, corriger les bugs et préparer la revue de sprint."
                    },
                    {
                        id: "AC31.01 | Nv3",
                        name: "Choisir et implémenter les architectures adaptées",
                        description: "J’ai contribué à une architecture modulaire permettant l’indépendance des modules (ex : Gantt) pour un développement agile itératif."
                    }

                ],
            },
            {
                title : "Optimiser",
                skills : [
                    {
                        id: "AC22.01 | Nv2",
                        name: "Choisir des structures de données complexes adaptées au problème",
                        description: "J’ai utilisé des structures adaptées pour représenter des tâches, statuts et relations temporelles dans les modules Kanban et Gantt."
                    },
                    {
                        id: "AC22.03 | Nv2",
                        name: "Comprendre les enjeux et moyens de sécurisation des données et du code",
                        description: "Nous avons appliqué des principes de validation côté serveur pour sécuriser les interactions avec la base de données (ex : entrées utilisateur)."
                    },
                    {
                        id: "AC32.02 | Nv3",
                        name: "Profiler, analyser et justifier le comportement d’un code existant",
                        description: "Des sessions de revue de code ont été menées en équipe pour améliorer les performances de chargement des vues et l’organisation du code PHP/JS."
                    }

                ],
            },
            {
                title : "Administrer",
                skills : [
                    {
                        id: "AC13.03 | Nv1",
                        name: "Installer et configurer un système d’exploitation et des outils de développement",
                        description: "J’ai utilisé un environnement WAMP local pour développer, tester et déployer les fonctionnalités de manière collaborative."
                    }

                ],
            },
            {
                title : "Gérer",
                skills : [
                    {
                        id: "AC14.01 | Nv1",
                        name: "Mettre à jour et interroger une base de données relationnelle",
                        description: "Nous avons conçu et utilisé des requêtes SQL pour insérer, modifier et afficher les tâches et projets dans l’espace de travail collaboratif."
                    },
                    {
                        id: "AC12.02 | Nv1",
                        name: "Visualiser des données",
                        description: "J’ai participé à la création d’interfaces qui affichent les informations projet (état des tâches, progression) de façon visuelle et exploitable."
                    },
                    {
                        id: "AC14.03 | Nv1",
                        name: "Concevoir une base de données relationnelle à partir d’un cahier des charges",
                        description: "J’ai contribué à la conception du modèle relationnel (tables Projets, Utilisateurs, Tâches) selon les besoins fonctionnels exprimés en réunion agile."
                    },
                    {
                        id: "AC24.03 | Nv2",
                        name: "Organiser la restitution de données à travers la programmation et la visualisation",
                        description: "Les vues dynamiques (ex : Kanban, liste de tâches, échéances) sont mises à jour en temps réel depuis la base de données via du JavaScript côté client."
                    }
                ],
            },
            {
                title : "Conduire",
                skills : [
                    {
                        id: "AC15.02 | Nv1",
                        name: "Mettre en place les outils de gestion de projet",
                        description: "Le projet a été organisé autour d’un backlog, avec sprints, tâches assignées, et suivi via  un tableau de bord Kanban et un gantt."
                    },
                    {
                        id: "AC15.03 | Nv1",
                        name: "Identifier les acteurs et les différentes phases d’un cycle de développement",
                        description: "En méthode agile, chaque membre avait des rôles définis (dev, PO, testeur) graçe à un RACI, et les phases du projet étaient découpées en itérations courtes avec démo finale."
                    },
                    {
                        id: "AC25.03 | Nv2",
                        name: "Identifier les critères de faisabilité d’un projet informatique",
                        description: "Nous avons évalué les fonctionnalités possibles à développer dans le temps imparti."
                    },
                    {
                        id: "AC25.04 | Nv2",
                        name: "Définir et mettre en œuvre une démarche de suivi de projet",
                        description: "Chaque sprint faisait l’objet d’une planification, d’un suivi par tâches assignées, et d’une revue avec retours pour itérer."
                    }

                ],
            },
            {
                title : "Collaborer",
                skills : [
                    {
                        id: "AC16.02 | Nv1",
                        name: "Découvrir les aptitudes requises selon les différents secteurs informatiques",
                        description: "J’ai travaillé sur la conception, le développement front-end/back-end et la base de données, découvrant ainsi les exigences de chaque domaine."
                    },
                    {
                        id: "AC16.03 | Nv1",
                        name: "Identifier les statuts, les fonctions et les rôles de chaque membre d’une équipe pluridisciplinaire",
                        description: "Un RACI a été défini pour chaque sprint, et des user stories ont été réparties entre les membres selon leurs compétences."
                    },
                    {
                        id: "AC16.04 | Nv2",
                        name: "Acquérir les compétences interpersonnelles pour travailler en équipe",
                        description: "Le projet m’a appris à collaborer efficacement en réunions, à gérer les désaccords techniques et à écouter les retours de chacuns."
                    }
                ],
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
        skillsSection : [
            {
                title : "Réaliser",
                skills : [
                    {
                        id: "AC11.01 | Nv1",
                        name: "Implémenter des conceptions simples",
                        description: "J’ai transformé des maquettes fonctionnelles en une interface graphique Java en utilisant Swing/AWT, en appliquant des principes de conception simples mais robustes."
                    },
                    {
                        id: "AC11.02 | Nv1",
                        name: "Élaborer des conceptions simples",
                        description: "J’ai participé à la rédaction des maquettes de l’application et à la définition des interfaces, traduisant les besoins fonctionnels en composants interactifs."
                    },
                    {
                        id: "AC11.04 | Nv1",
                        name: "Développer des interfaces utilisateurs",
                        description: "J’ai conçu et implémenté l’interface graphique de l’application en Java (Swing), en intégrant des fenêtres de paramétrage et des pop-ups d’informations."
                    },
                    {
                        id: "AC21.03 | Nv2",
                        name: "Adopter de bonnes pratiques de conception et de programmation",
                        description: "Nous avons structuré le code en suivant les principes de séparation des responsabilités (MVC) pour améliorer la maintenabilité et la clarté du projet."
                    }
                ],
            },
            {
                title : "Optimiser",
                skills : [
                    {
                        id: "AC12.01 | Nv1",
                        name: "Analyser un problème avec méthode",
                        description: "J'ai étudié la structure du projet nécessaire pour mettre en place les différents algorithmes de colorations."
                    },
                    {
                        id: "AC12.02 | Nv1",
                        name: "Comparer des algorithmes pour des problèmes classiques",
                        description: "Nous avons analysé plusieurs algorithmes de gestion de trajectoires avant que j'implémente DSATUR pour la coloration de graphes afin de limiter les conflits aériens."
                    },
                    {
                        id: "AC12.03 | Nv1",
                        name: "Formaliser et mettre en œuvre des outils mathématiques pour l’informatique",
                        description: "J’ai utilisé la théorie des graphes pour représenter les conflits potentiels entre vols et appliquer des algorithmes de coloration pour les résoudre."
                    },
                    {
                        id: "AC22.02 | Nv2",
                        name: "Utiliser des techniques algorithmiques adaptées pour des problèmes complexes",
                        description: "J’ai implémenté l’algorithme DSATUR pour optimiser l’allocation des trajectoires aériennes dans un graphe de conflits entre vols."
                    },
                    {
                        id: "AC32.03 | Nv3",
                        name: "Choisir et utiliser des bibliothèques et méthodes dédiées au domaine d'application",
                        description: "J’ai utilisé les bibliothèques Java Swing et AWT pour la visualisation."
                    }

                ],
            },
            {
                title : "Administrer",
                skills : [
                    {
                        id: "AC13.03 | Nv1",
                        name: "Installer et configurer un système d’exploitation et des outils de développement",
                        description: "Nous avons configuré un environnement Java, avec les bibliothèques nécessaires, et le système de gestion de versions (Git) pour faciliter le développement collaboratif."
                    }
                ],
            },
            {
                title : "Gérer",
                skills : [
                    {
                        id: "AC12.02 | Nv1",
                        name: "Visualiser des données",
                        description: "J’ai contribué à la création des paramètres permettant d'interagir avec la carte. Cela permettant d'agir sur la représentation des informations sur la carte et de la manière de traiter les informations"
                    },
                    {
                        id: "AC24.03 | Nv2",
                        name: "Organiser la restitution de données à travers la programmation et la visualisation",
                        description: "J’ai développé une interface graphique qui restitue les résultats de la simulation (nombre de collisions, itinéraires) de manière compréhensible et exploitable."
                    }

                ],
            },
            {
                title : "Conduire",
                skills : [
                    {
                        id: "AC25.03 | Nv2",
                        name: "Identifier les critères de faisabilité d’un projet informatique",
                        description: "Nous avons défini des objectifs réalistes et évalué la faisabilité technique du projet (lecture de CSV, animation, collisions) en fonction du temps imparti."
                    }
                ],
            },
            {
                title : "Collaborer",
                skills : [
                    {
                        id: "AC16.03 | Nv1",
                        name: "Identifier les statuts, les fonctions et les rôles de chaque membre d’une équipe pluridisciplinaire",
                        description: "J’ai travaillé dans une équipe où chacun avait des rôles définis (UI, algorithmes, traitement des données), ce qui a favorisé la coordination du projet."
                    },
                    {
                        id: "AC16.04 | Nv2",
                        name: "Acquérir les compétences interpersonnelles pour travailler en équipe",
                        description: "Ce projet m’a permis de développer mes compétences en communication, en partageant efficacement les tâches et en intégrant les retours de l’équipe."
                    }
                ],
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