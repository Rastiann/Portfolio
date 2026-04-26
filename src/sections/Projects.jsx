import ProjectModal from "../components/ProjectDescription"
import ProjectsGrid from "../components/ProjectsGrid"

export const projects = [
    {
        id: 1,
        title: "DiceFull",
        date: "2025",
        className: "md:col-span-2",
        thumbnail: "assets/projects/dicefull.png",
        technologies: ["PHP", "CodeIgniter 4", "Docker", "JavaScript", "HTML", "CSS"],

        subtitle: "Plateforme e-commerce de jeux de société",

        description: `
DiceFull est une application web e-commerce dédiée à la vente de jeux de société.

Le projet permet aux utilisateurs de parcourir un catalogue de jeux, rechercher et filtrer selon différents critères, consulter des fiches détaillées et gérer un panier d’achat.

L’objectif était de concevoir une application complète, en partant de la modélisation des besoins jusqu’à l’implémentation technique, tout en respectant des bonnes pratiques d’architecture logicielle (MVC, design patterns) et de déploiement (conteneurisation).
    `,

        github: "https://github.com/Rastiann/DiceFull/",

        keyPoints: [
            {
                title: "Conception UML complète",
                description: "Une phase de conception approfondie a permis de structurer le projet avant le développement, en modélisant les données, les fonctionnalités et les interactions utilisateurs.",
                codeSnippet: `Diagrammes réalisés :
- Entité / Association → base de données
- DCU → fonctionnalités utilisateur
- Diagrammes d’activité → parcours utilisateur
- Diagramme de classes → structure du code

Objectif :
→ Réduire les erreurs de conception
→ Clarifier les besoins`
            },
            {
                title: "Architecture MVC (CodeIgniter 4)",
                description: "Le projet repose sur une architecture MVC permettant une séparation claire des responsabilités entre la logique métier, l’affichage et la gestion des données.",
                codeSnippet: `// Controller
public function index() {
  $games = $this->gameModel->findAll();
  return view('catalogue', ['games' => $games]);
}

// Model
class GameModel extends Model {
  protected $table = 'games';
}`
            },
            {
                title: "Design Patterns & gestion de l’historique",
                description: "Plusieurs design patterns ont été utilisés (Strategy, Factory) pour structurer le code et améliorer sa flexibilité. Le pattern Memento a été particulièrement important pour répondre à une problématique métier liée à l’historique des commandes.",
                codeSnippet: `// Memento : sauvegarde d’un jeu au moment de la commande
class Jeu {
  public function save(): MementoJeu {
    return new MementoJeu(
      $this->id,
      $this->nom,
      $this->prix
    );
  }
}

// Snapshot stocké en base
class MementoJeu {
  private $id;
  private $nom;
  private $prix;

  public function __construct($id, $nom, $prix) {
    $this->id = $id;
    $this->nom = $nom;
    $this->prix = $prix;
  }
}

// Une commande stocke des MementoJeu au lieu de Jeu
// → permet de conserver l’historique même si un jeu est supprimé`
            },
            {
                title: "Déploiement conteneurisé",
                description: "L’application est déployée via des conteneurs, permettant un environnement reproductible et un démarrage rapide du projet.",
                codeSnippet: `podman login docker.io
podman compose up --detach`
            },
            {
                title: "Fonctionnalités e-commerce",
                description: "Implémentation des fonctionnalités essentielles d’un site de vente en ligne pour offrir une expérience utilisateur complète et fluide.",
                codeSnippet: `Fonctionnalités :
- Catalogue de jeux
- Filtres & tri
- Fiche produit détaillée
- Panier utilisateur

Objectif :
→ Navigation intuitive
→ Expérience utilisateur efficace`
            }
        ]
    },
    {
        id: 2,
        title: "FishFull",
        date: "2025",
        className: "md:col-span-1",
        thumbnail: "assets/projects/api.png",
        technologies: ["Node.js", "Express", "Microservices", "Docker", "API REST", "Testing"],
        subtitle: "API REST de protection du monde aquatique",

        description: `
FishFull est une API REST composée de micro-services dédiée à la protection du monde marin.

Le projet vise à collecter, analyser et exploiter des données liées aux espèces marines ainsi qu'aux incidents environnementaux afin de favoriser la protection de la faune et de la flore aquatique.
    `,

        github: "https://github.com/Rastiann/FishFull",

        keyPoints: [
            {
                title: "Qualité logicielle & fiabilité",
                description: "Mise en place de tests automatisés sur l’ensemble de l’API pour garantir un comportement fiable et éviter les régressions lors des évolutions.",
                codeSnippet: `describe("findAllSpecies", () => {
  beforeEach(async () => {
    await seeder() // données de test
  })

  it("retourne toutes les espèces triées", async () => {
    const res = await especesDAO.findAllSpecies()
    assert.equal(res.length > 0, true)
  })
})`
            },
            {
                title: "Tests robustes (Mutation testing)",
                description: "Validation de la qualité des tests grâce au mutation testing : des erreurs sont volontairement injectées pour vérifier que les tests les détectent bien.",
                codeSnippet: `export default {
  mutate: ["api/controller/especeController.mjs"],
  reporters: ["html"],
  thresholds: {
    high: 80,
    low: 60
  }
}`
            },
            {
                title: "Point d’entrée unique (Proxy)",
                description: "Un proxy central permet d’accéder à tous les services via une seule URL, simplifiant l’intégration côté client et améliorant la gestion des pannes.",
                codeSnippet: `app.use('/api/statistique', createProxyMiddleware({
  target: process.env.ESPECE_URL,
  on: {
    error: (req, res) => {
      res.status(502).json({ message: "Service indisponible" })
    }
  }
}))`
            },
            {
                title: "Signalement d’incidents",
                description: "Un micro-service dédié permet de déclarer et stocker des incidents environnementaux de manière persistante.",
                codeSnippet: `await mongoose.connect(uri)

await Signalement.create({
  type: "pollution",
  localisation: "Atlantique"
})`
            },
            {
                title: "Données enrichies automatiquement",
                description: "Les données sur les espèces sont enrichies via des APIs externes pour garantir des informations à jour et exploitables.",
                codeSnippet: `await apiExterneDAO.updateNewPoisson()
await apiExterneDAO.updateNewZoneGeo()`
            },
            {
                title: "Visualisation du système (BPMN)",
                description: "Modélisation des échanges entre l’utilisateur et les micro-services via un diagramme BPMN pour clarifier les flux, les responsabilités et les interactions.",
                codeSnippet: `Utilisateur
    ↓
  Proxy API
   ↓   ↓
Service  Service
Espèce   Signalement
   ↓
API Externe

Flux :
1. L'utilisateur envoie une requête
2. Le proxy redirige vers le bon micro-service
3. Le service traite la demande
4. (Espèce) → appel API externe si besoin
5. Réponse renvoyée au client`
            }
        ]
    },
    {
        id: 3,
        className: "md:col-span-1",
        thumbnail: "assets/projects/moviefull.png",
        technologies: ["Kotlin", "Android", "Android Studio"],
        title: "MovieFull",
        date: "2026",

        subtitle: "Application mobile de recherche de films",

        description: `
MovieFull est une application Android permettant de rechercher et explorer des films à partir de nombreux critères (titre, genre, acteur, réalisateur…).

L’objectif est de centraliser toutes les informations liées au cinéma dans une seule application, avec une interface simple et fluide : recherche avancée, liste paginée et fiches détaillées.

Le projet met l’accent sur la gestion d’état côté mobile, l’intégration d’API externe et l’expérience utilisateur (navigation, performance, lisibilité des données).
    `,

        github: "https://github.com/Rastiann/MovieFinder",

        keyPoints: [
            {
                title: "Gestion d’état & rotation écran",
                description: "Utilisation d’un ViewModel pour conserver les données même lors d’un changement d’orientation (rotation écran), évitant ainsi de relancer les requêtes et améliorant l’expérience utilisateur.",
                codeSnippet: `val uiState by viewModel.uiState.collectAsState()

// Les données restent en mémoire même si l'écran tourne
// → pas de rechargement inutile`
            },
            {
                title: "Intégration API externe (TMDB)",
                description: "Connexion à une API de films (TheMovieDB) pour récupérer dynamiquement les données (films, genres, acteurs…). Gestion des erreurs pour garantir une application stable.",
                codeSnippet: `val response = client.get("api/movies") {
  parameter("api_key", apiKey)
}

if (response.isSuccessful) {
  return Success(response.body)
} else {
  return Error("Erreur API")
}`
            },
            {
                title: "Gestion des états (Loading / Success / Error)",
                description: "Mise en place d’un système d’état pour gérer les différentes phases d’une requête (chargement, succès, erreur), permettant d’adapter dynamiquement l’interface utilisateur.",
                codeSnippet: `sealed interface SearchState {
  object Loading
  data class Success(val data: List<Movie>)
  data class Error(val message: String)
}

// UI adaptée selon l'état :
→ Loading : spinner
→ Success : affichage des films
→ Error : message utilisateur`
            },
            {
                title: "Navigation entre écrans",
                description: "Passage de données entre les écrans via des intents pour naviguer de la liste de films vers une fiche détaillée.",
                codeSnippet: `val intent = Intent(context, MovieActivity::class.java)
intent.putExtra("movie_id", movie.id)
startActivity(intent)`
            }
        ]
    },
    {
        id: 4,
        className: "md:col-span-2",
        thumbnail: "assets/projects/lol.png",
        technologies: ["HTML", "CSS"],
        title: "League of Legends Skin",
        date: "2024",

        subtitle: "Site vitrine de présentation de skins",

        description: `
League of Legends Skin est un site vitrine réalisé dans le cadre du BUT Informatique.

Le projet a pour objectif de présenter une boutique fictive de skins League of Legends à travers une interface web statique, en mettant l’accent sur le design, la mise en page et l’expérience visuelle.

Il s’agit d’un projet centré sur les bases du développement front-end (HTML / CSS) et la structuration d’une page web propre et cohérente.
    `,

        github: "https://github.com/Rastiann/showcase_site_lol",

    },
    {
        id: 5,
        className: "md:col-span-2",
        thumbnail: "assets/projects/graphe.png",
        technologies: ["Python"],
        title: "Graphe Analyse",
        date: "2024",

        subtitle: "Analyse de graphes et algorithmes de plus courts chemins",

        description: `
Projet Python consacré à la manipulation de graphes valués et à l’analyse de réseaux.

L’application permet d’explorer différentes structures de graphes et d’appliquer plusieurs algorithmes classiques de recherche de plus courts chemins (Dijkstra, Bellman-Ford, Floyd-Warshall).

Le projet inclut également une approche d’analyse de réseaux, notamment pour l’étude de relations et de métriques issues de graphes de type réseaux sociaux.
    `,

        github: "https://github.com/Rastiann/Graph_Algorithms_Network_Analysis"
    },
    {
        id: 6,
        className: "md:col-span-1",
        thumbnail: "assets/projects/qui-est-ce.png",
        technologies: ["Kotlin", "JavaFX"],
        title: "Qui est-ce ?",
        date: "2025",

        subtitle: "Jeu client-serveur en temps réel",

        description: `
Qui est-ce ? est une application client développée en Kotlin permettant de jouer au célèbre jeu “Guess Who” en réseau.

Le client communique avec un serveur pour gérer les parties en temps réel : questions, réponses et état de la partie. L’objectif du projet est de gérer correctement la communication réseau, la réactivité de l’interface et la synchronisation des états de jeu entre plusieurs joueurs.
    `,

        github: "https://github.com/Rastiann/Qui_est-ce",

        keyPoints: [
            {
                title: "Application multithread (réactivité du jeu)",
                description: "Mise en place d’un système multithread pour éviter le blocage de l’interface utilisateur lors des échanges réseau avec le serveur. Les tâches réseau sont exécutées en arrière-plan et peuvent être périodiques ou immédiates.",
                codeSnippet: `class ApiThread {

    private val taskQueue = LinkedBlockingQueue<Task>()
    @Volatile private var isRunning = false

    fun start() {
        isRunning = true
        Thread { runLoop() }.start()
    }

    fun execute(runnable: Runnable) {
        taskQueue.put(Task.ImmediateTask(runnable))
    }
}

// Objectif :
// → éviter les freezes UI
// → gérer les appels réseau sans bloquer le jeu`
            },
            {
                title: "Architecture MVC côté client",
                description: "L’application est structurée selon le pattern MVC. Les contrôleurs récupèrent la vue et mettent à jour l’état du jeu en fonction des données reçues du serveur.",
                codeSnippet: `interface GameController<T> {
    fun getVue(): Parent
    fun update(state: T)
}

class AnsweringController : GameController<Answering> {

    override fun update(gameState: Answering) {
        gameState.answer("oui / non")
    }
}`
            },
            {
                title: "Synchronisation des états du jeu",
                description: "Gestion des changements d’état entre le serveur et le client. Les mises à jour peuvent provenir d’un thread réseau, ce qui nécessite une gestion sécurisée des changements d’état de l’application.",
                codeSnippet: `interface StateChangeHandler {
    fun handle(newState: AppState, error: Throwable? = null)
}

// Important :
// → les états peuvent être modifiés depuis un thread réseau
// → nécessité de gérer la concurrence`
            },
            {
                title: "Tests du serveur et robustesse",
                description: "Création de tests automatisés pour vérifier le bon fonctionnement des routes serveur, notamment les cas d’erreurs et d’entrées invalides.",
                codeSnippet: `@ParameterizedTest
fun testRequeteInvalide(idPartie: Int, idJoueur: Int) {
    assertThrows<IllegalArgumentException> {
        client.requeteChercherEncore(idPartie, idJoueur, "cle")
    }
}

// Objectif :
// → sécuriser les endpoints
// → éviter les comportements inattendus`
            }
        ]
    },
    {
        id: 7,
        className: "md:col-span-1",
        thumbnail: "assets/projects/txt2automate.png",
        technologies: ["Kotlin"],
        title: "Txt2Automate",
        date: "2025-2026",

        subtitle: "Génération et visualisation d’automates finis",

        description: `
Txt2Automate est un projet en Kotlin permettant de créer et manipuler des automates finis à partir de fichiers texte.

L’application permet de définir un automate (alphabet, états, transitions, état initial et états finaux), puis de le générer automatiquement et de le visualiser sous forme de graphe PNG grâce à Graphviz.

Le projet fonctionne sur Linux et Windows et met en avant la manipulation de structures de données complexes et leur représentation graphique.
    `,

        github: "https://github.com/Rastiann/Txt2Automate",

        keyPoints: [
            {
                title: "Construction d’un automate depuis un fichier texte",
                description: "Développement d’un builder permettant de générer dynamiquement un automate à partir d’un fichier texte décrivant ses états, transitions et alphabet.",
                codeSnippet: `fun automateBuilder(file: String): Automate {

    val etats = mutableMapOf<String, Etat>()
    val alphabet = mutableSetOf<Char>()

    File(file).forEachLine { line ->

        val parts = line.split(" ")

        when (parts[0]) {

            "init" -> etatsInitial = etats.getOrPut(parts[1]) { Etat(parts[1]) }

            "finals" -> parts.drop(1).forEach {
                etatsFinal.add(etats.getOrPut(it) { Etat(it) })
            }

            "alphabet" -> alphabet.addAll(parts.drop(1).map { it[0] })

        }
    }

    return Automate(alphabet, etats.values.toSet())
}`
            },
            {
                title: "Visualisation graphique de l’automate",
                description: "Génération automatique d’un fichier graphique (DOT → PNG) permettant de visualiser l’automate sous forme de graphe à l’aide de Graphviz.",
                codeSnippet: `override fun toString(): String {

    val dotFile = generateDot()
    val pngFile = File("automate.png")

    generatePng(dotFile, pngFile)

    Desktop.getDesktop().open(pngFile)

    return ""
}`
            },
            {
                title: "Gestion des états spéciaux (état puits)",
                description: "Implémentation d’un état spécial dit ‘puits’ permettant de gérer les erreurs de reconnaissance et de différencier les erreurs de séquence ou de terminaison.",
                codeSnippet: `class Puit(nom: String) : Etat(nom) {

    override fun etatSuivant(value: Char): Puit {
        return this // reste bloqué dans l'état puits
    }

}`
            }
        ]
    },
    {
        id: 8,
        className: "md:col-span-1",
        thumbnail: "assets/projects/quadtree.png",
        technologies: ["Go"],
        title: "Quadtree",
        date: "2024",

        subtitle: "Optimisation de carte via structure Quadtree",

        description: `
Projet réalisé en Go sous forme de petit jeu vidéo, enrichi avec plusieurs fonctionnalités visant à explorer l’utilisation de structures de données avancées.

L’objectif principal est l’implémentation d’un Quadtree afin d’optimiser le stockage et l’accès à une carte représentée sous forme de matrice, en réduisant les redondances et en améliorant les performances.
    `,

        github: "https://github.com/Rastiann/quadtree_game",

        keyPoints: [
            {
                title: "Optimisation de la carte avec un Quadtree",
                description: "Implémentation d’une structure Quadtree permettant de représenter une carte de manière hiérarchique afin d’optimiser la mémoire et les performances d’accès aux données.",
                codeSnippet: `func MakeFromArray(array [][]int) *Quadtree {
    root := makeNode(array, 0, 0, width, height)
    return &Quadtree{root: root}
}

// Découpage récursif en 4 zones
func makeNode(array [][]int, x, y, w, h int) *node {
    if w == 1 && h == 1 {
        return &node{
            content: array[y][x],
            isLeaf: true,
        }
    }

    midX := w / 2
    midY := h / 2

    return &node{
        topLeft:     makeNode(...),
        topRight:    makeNode(...),
        bottomLeft:  makeNode(...),
        bottomRight: makeNode(...),
    }
}`
            },
            {
                title: "Reconstruction de la carte",
                description: "Parcours du Quadtree pour reconstruire la matrice complète de la carte et permettre son affichage ou son exploitation par le moteur du jeu.",
                codeSnippet: `func (qt *Quadtree) GetContent(content [][]int) {
    for y := range content {
        for x := range content[y] {
            content[y][x] = qt.GetTile(x, y)
        }
    }
}`
            },
            {
                title: "Projet fonctionnel mais documentation incomplète",
                description: "Le projet est entièrement fonctionnel et terminé. Une amélioration possible serait l’ajout d’une documentation (README) et d’une synthèse technique pour faciliter la prise en main et la compréhension du projet.",
            }
        ]
    },
    {
        id: 9,
        className: "md:col-span-1",
        thumbnail: "assets/projects/tcp.png",
        technologies: ["Go", "TCP"],
        title: "Serveur TCP de transfert de fichiers",
        date: "2024",

        subtitle: "Serveur réseau multi-clients en concurrence",

        description: `
Projet en Go implémentant un serveur TCP permettant le transfert de fichiers entre plusieurs clients.

Le serveur gère des connexions simultanées et propose un système de commandes après authentification. Il fonctionne avec un port principal pour les clients et un port de contrôle pour l’administration.

L’objectif principal du projet est de comprendre les communications réseau bas niveau et la gestion de la concurrence côté serveur.
    `,

        github: "https://github.com/Rastiann/tcp-file-server",

        keyPoints: [
            {
                title: "Communication réseau via TCP",
                description: "Implémentation d’un protocole de communication client-serveur basé sur TCP, avec gestion des messages envoyés et reçus via des buffers.",
                codeSnippet: `func SendMessage(out *bufio.Writer, message string) {
    out.WriteString(message)
    out.Flush()
}

func ReceiveMessage(in *bufio.Reader) string {
    msg, _ := in.ReadString('\n')
    return msg
}

// Objectif :
// → échanger des messages fiables entre client et serveur`
            },
            {
                title: "Gestion concurrente de plusieurs clients",
                description: "Le serveur est conçu pour gérer plusieurs clients en parallèle grâce aux goroutines et aux channels, garantissant une exécution non bloquante.",
                codeSnippet: `go interaction_client(conn)

for {
    go acceptClient(listener, ch)

    select {
        case client := <-ch:
            go handleClient(client)
    }
}

// Objectif :
// → gérer plusieurs connexions simultanées`
            },
            {
                title: "Synchronisation et sécurité des données",
                description: "Utilisation de mutex et de channels pour sécuriser les accès aux données partagées (nombre de connexions, historique).",
                codeSnippet: `var mut sync.Mutex

mut.Lock()
nbConnex++
mut.Unlock()

// channels pour communication entre goroutines
nbConnexChan <- nbConnex`
            },
            {
                title: "Serveur multi-services (clients + administration)",
                description: "Le serveur gère deux ports distincts : un pour les clients et un pour l’administration, permettant de superviser et contrôler le système indépendamment.",
                codeSnippet: `net.Listen("tcp", ":3333") // clients
net.Listen("tcp", ":3334") // admin

// séparation des responsabilités :
→ trafic utilisateur
→ gestion administrative`
            },
            {
                title: "Gestion propre de l’arrêt du serveur",
                description: "Mise en place d’un système de terminaison propre utilisant des channels pour arrêter progressivement les goroutines et fermer les connexions.",
                codeSnippet: `case <-terminate:
    l.Close()
    c_term <- 1
    m_term <- 1

// Objectif :
// → arrêt propre du serveur
// → pas de fuite de goroutines`
            }
        ]
    }
]


export default function Projects() {

    return <section id="projects" className="w-full c-space h-auto flex flex-col gap-10 text-center md:text-start">
        <h1 className="font-extrabold text-7xl  md:text-8xl">Projects</h1>
        <ProjectsGrid projects={projects} />
    </section>

}
