// arede.online · TEMAS (12 nov 2026): 14 temas que não se sobrepõem, para agrupar as notícias, filtrar o feed e calibrar o algoritmo.
// Classificação por pontos: cada termo do título vale 2, da chamada vale 1; vence o tema com mais pontos (empate: a ordem abaixo).
// Sem nenhum termo, a notícia fica em "Outros" (não vira filtro). O texto é comparado sem acentos e em minúsculas, em pt, en e es.
export const TEMAS_LISTA = ["Política e governo", "Economia e trabalho", "Justiça e segurança", "Direitos e igualdade", "Saúde", "Educação",
  "Meio ambiente e clima", "Mobilidade", "Moradia", "Saneamento", "Alimentação e campo", "Ciência e tecnologia", "Cultura", "Mundo"];
export const TEMA_OUTROS = "Outros";

const T = (...p: string[]) => new RegExp("\\b(" + p.join("|") + ")\\b", "g");
export const TEMAS_TERMOS: [string, RegExp][] = [
  ["Política e governo", T(
    "congresso", "senado\\w*", "senador\\w*", "deputad\\w*", "camara dos deputados", "camara municipal", "vereador\\w*", "assembleia legislativa", "eleic\\w*", "eleitor\\w*", "eleitora\\w*",
    "candidat\\w*", "partido\\w*", "pt", "pl", "psdb", "mdb", "psol", "uniao brasil", "republicanos", "presidente da republica", "planalto", "ministr[oa]s?", "ministerio\\w*", "governador\\w*",
    "prefeit[oa]s?", "prefeitura\\w*", "lula", "bolsonaro", "alcolumbre", "hugo motta", "governo federal", "governo lula", "base aliada", "oposicao", "cpmi", "cpi", "projeto de lei", "pec", "plp",
    "medida provisoria", "impeachment", "veto\\w*", "sancion\\w*", "orcamento", "ajuste fiscal", "arcabouco", "emenda\\w* parlamentar\\w*", "reforma ministerial", "licitac\\w*", "audiencia publica",
    "orcamento participativo", "conselho municipal", "consulta publica", "plebiscito", "referendo", "tse", "urna\\w*", "gestao publica", "servidor\\w* public\\w*",
    "congress", "senate", "senator\\w*", "lawmaker\\w*", "election\\w*", "voter\\w*", "campaign", "democrat\\w*", "republican\\w*", "white house", "governor\\w*", "mayor\\w*", "parliament\\w*", "prime minister",
    "congreso", "senado", "diputad\\w*", "elecciones", "eleccion", "votantes", "gobierno", "gobernador\\w*", "alcalde\\w*", "presidencia", "parlamento", "oficialismo", "oposicion")],
  ["Economia e trabalho", T(
    "economia\\w*", "economic\\w*", "pib", "inflac\\w*", "ipca", "juros", "selic", "banco central", "copom", "dolar", "cambio", "bolsa\\w*", "ibovespa", "acoes da \\w+", "mercado financeiro", "banco\\w*", "bc", "fed", "financas", "financeir\\w*", "logistic\\w*", "investidor\\w*",
    "investiment\\w*", "lucro\\w*", "prejuizo\\w*", "receita\\w*", "faturamento", "empresa\\w*", "empresari\\w*", "industria\\w*", "comercio", "varejo", "exportac\\w*", "importac\\w*", "tarifa\\w* de importacao",
    "imposto\\w*", "tribut\\w*", "reforma tributaria", "cbs", "ibs", "irpf", "imposto de renda", "fiscal", "divida\\w*", "credito", "credor\\w*", "falencia", "recuperacao judicial", "ipo",
    "emprego\\w*", "desemprego", "trabalh\\w*", "salario\\w*", "salario minimo", "renda", "clt", "escala 6x1", "jornada", "greve\\w*", "sindicat\\w*", "aposentadori\\w*", "inss", "previdencia",
    "bolsa familia", "beneficio\\w*", "pix", "fgts", "mei", "petrobras", "anp", "aneel", "conta de luz", "combustive\\w*", "gasolina", "diesel", "precos?", "custo de vida", "consumidor\\w*",
    "economy", "inflation", "banks?", "banking", "interest rates?", "stocks?", "shares", "market\\w*", "investor\\w*", "earnings", "profit\\w*", "revenue", "tariff\\w*", "jobs", "unemployment", "wages?", "workers?", "strike\\w*", "union\\w*",
    "economia", "inflacion", "tasas?", "mercados?", "empleo\\w*", "desempleo", "trabajador\\w*", "salarios?", "huelga\\w*", "impuestos?", "precios?", "empresas?")],
  ["Justiça e segurança", T(
    "policia\\w*", "policia\\w*", "pm", "pf", "policia federal", "delegacia\\w*", "delegad\\w*", "preso\\w*", "presa\\w*", "prisao", "prisoes", "prende\\w*", "detid\\w*", "suspeit\\w*", "investigac\\w*",
    "inquerito\\w*", "operacao", "crime\\w*", "criminos\\w*", "desaparecid\\w*", "corpo de", "encontrad[oa] mort[oa]", "afogad\\w*", "homicidio\\w*", "assassin\\w*", "morto\\w*", "morre\\w*", "tiro\\w*", "baleado\\w*", "assalto\\w*", "roubo\\w*", "furto\\w*", "golpe\\w*",
    "trafico", "traficante\\w*", "faccao", "faccoes", "milicia\\w*", "sequestro\\w*", "violencia", "agress\\w*", "estupro\\w*", "feminicidio\\w*", "abuso\\w*", "acidente\\w*", "colisao", "capotou",
    "justica", "juiz\\w*", "juiza\\w*", "tribunal", "tribunais", "stf", "stj", "tse", "tst", "ministro do stf", "fachin", "moraes", "dino", "gilmar", "pgr", "procurador\\w*", "ministerio publico", "mp",
    "denuncia\\w*", "condenad\\w*", "condenac\\w*", "absolvid\\w*", "julgamento\\w*", "juri", "sentenca", "habeas corpus", "lei\\w*", "processo\\w*", "acusad\\w*", "reu", "re", "fake news",
    "police", "arrest\\w*", "crime\\w*", "murder\\w*", "shooting", "killed", "court\\w*", "judge\\w*", "trial", "lawsuit\\w*", "prosecutor\\w*", "charged", "sentenced", "supreme court",
    "policia", "detenido\\w*", "asesinat\\w*", "homicidio", "tribunal", "juez", "jueza", "juicio", "fiscalia", "condena\\w*", "narcotrafico", "carcel")],
  ["Direitos e igualdade", T(
    "direitos humanos", "direito\\w* d[ao]s?", "racismo", "racista\\w*", "racial", "injuria racial", "negr[oa]s", "quilombo\\w*", "quilombola\\w*", "indigena\\w*", "povos? originari\\w*", "terra\\w* indigena\\w*",
    "comunidades tradicionais", "consciencia negra", "zumbi dos palmares", "funai", "mulher\\w*", "feminis\\w*", "machismo", "genero", "violencia domestica", "lei maria da penha", "igualdade", "desigualdade\\w*", "discrimina\\w*",
    "lgbt\\w*", "lgbtqia\\w*", "trans", "transfobia", "homofobia", "pessoa\\w* com deficiencia", "deficiencia", "acessibilidade", "autis\\w*", "idos[oa]s", "crianca\\w*", "infanc\\w*", "adolescente\\w*",
    "juventude", "jovens", "refugiad\\w*", "migrante\\w*", "imigrante\\w*", "populacao de rua", "situacao de rua", "trabalho escravo", "trabalho infantil", "trabalho de cuidado", "inclusao social",
    "human rights", "civil rights", "racism", "racial", "indigenous", "women", "gender", "lgbtq\\w*", "transgender", "disabilit\\w*", "refugee\\w*", "migrants?", "immigrants?", "discrimination", "equality",
    "derechos humanos", "racismo", "indigenas?", "mujeres", "genero", "migrantes", "refugiados", "discriminacion", "igualdad")],
  ["Saúde", T(
    "saude", "sus", "hospita\\w*", "ubs", "upa", "posto\\w* de saude", "medic[oa]s?", "enfermeir\\w*", "vacina\\w*", "vacinac\\w*", "imuniza\\w*", "dengue", "chikungunya", "zika", "covid\\w*", "gripe",
    "influenza", "sarampo", "tuberculose", "hiv", "aids", "cancer", "diabetes", "obesidade", "doenca\\w*", "epidemi\\w*", "pandemi\\w*", "surto\\w*", "anvisa", "remedio\\w*", "medicament\\w*",
    "saude mental", "depressao", "ansiedade", "suicidio", "cirurgia\\w*", "transplante\\w*", "exames?", "pacientes?", "glaucoma", "bulas?", "ozempic", "wegovy", "cerebro", "hormonio\\w*", "sono", "novembro azul", "outubro rosa", "sintoma\\w*", "tratamento\\w*", "plano\\w* de saude", "oms", "opas", "fiocruz",
    "health", "hospital\\w*", "doctors?", "nurses?", "vaccin\\w*", "disease\\w*", "outbreak\\w*", "virus", "cancer", "mental health",
    "salud", "hospitales", "medicos?", "vacunas?", "enfermedad\\w*", "brote\\w*")],
  ["Educação", T(
    "educac\\w*", "escola\\w*", "ensino", "aluno\\w*", "aluna\\w*", "estudante\\w*", "professor\\w*", "professora\\w*", "docente\\w*", "universidade\\w*", "faculdade\\w*", "enem", "sisu", "prouni",
    "fies", "vestibular\\w*", "mec", "inep", "creche\\w*", "alfabetiza\\w*", "merenda", "sala\\w* de aula", "bolsa\\w* de estudo", "pos-graduacao", "capes", "cnpq", "iftm", "if\\w{2,3}", "usp", "unicamp", "unesp", "ufmg", "ufrj",
    "education", "schools?", "students?", "teachers?", "universit\\w*", "college\\w*", "campus",
    "educacion", "escuela\\w*", "estudiantes?", "docentes?", "maestros?", "universidad\\w*")],
  ["Meio ambiente e clima", T(
    "meio ambiente", "ambiental\\w*", "clima", "climatic\\w*", "aquecimento global", "cop ?30", "cop ?31", "emiss\\w*", "carbono", "desmatamento", "amazonia", "cerrado", "pantanal", "mata atlantica",
    "floresta\\w*", "queimada\\w*", "incendio\\w* florest\\w*", "biodiversidade", "especie\\w*", "fauna", "flora", "ibama", "icmbio", "garimpo\\w*", "mineracao", "terras raras", "poluic\\w*",
    "enchente\\w*", "inundac\\w*", "chuva\\w*", "temporal", "seca", "estiagem", "onda de calor", "calor extremo", "frente fria", "ciclone\\w*", "tempestade\\w*", "deslizamento\\w*", "defesa civil",
    "energia solar", "energia eolica", "renovave\\w*", "transicao energetica", "petroleo na foz", "oceano\\w*", "recicla\\w*", "plastico\\w*",
    "climate", "environment\\w*", "el nino", "la nina", "emissions?", "deforestation", "wildfires?", "floods?", "flooding", "storms?", "hurricanes?", "drought", "heatwave", "renewable\\w*", "species", "pollution",
    "clima", "ambiental", "medio ambiente", "deforestacion", "incendios?", "inundaciones", "tormenta", "huracan", "sequia", "emisiones", "contaminacion")],
  ["Mobilidade", T(
    "mobilidade", "transporte\\w*", "onibus", "metro", "trem", "trens", "brt", "vlt", "ciclovia\\w*", "ciclofaixa\\w*", "bicicleta\\w*", "pedestre\\w*", "calcada\\w*", "transito", "congestionamento\\w*",
    "rodovia\\w*", "estrada\\w*", "br-\\d+", "tarifa zero", "passagem de onibus", "aplicativo\\w* de transporte", "uber", "motoboy\\w*", "aeroporto\\w*", "voo\\w*", "aviao", "porto\\w*", "obras? viar\\w*",
    "transit", "subway", "buses", "bus", "trains?", "rail\\w*", "traffic", "commut\\w*", "cycling", "bike lanes?", "airport\\w*", "flights?",
    "movilidad", "autobus\\w*", "subte", "trenes", "tren", "transito", "trafico vehicular", "ciclovia\\w*", "aeropuerto\\w*", "vuelos?")],
  ["Moradia", T(
    "moradia\\w*", "habitac\\w*", "minha casa,? minha vida", "mcmv", "aluguel", "alugue\\w*", "despejo\\w*", "reintegrac\\w* de posse", "ocupac\\w*", "sem-teto", "sem teto", "mtst", "favela\\w*",
    "periferia\\w*", "imove\\w*", "imobiliari\\w*", "financiamento imobiliario", "condominio\\w*", "urbanismo", "plano diretor", "zoneamento", "regularizacao fundiaria",
    "housing", "rent", "renters?", "tenants?", "eviction\\w*", "homeless\\w*", "affordable housing", "mortgage\\w*", "real estate",
    "vivienda\\w*", "alquiler\\w*", "desalojo\\w*", "inquilinos?", "hipoteca\\w*")],
  ["Saneamento", T(
    "saneamento", "esgoto\\w*", "agua tratada", "abastecimento de agua", "falta de agua", "sabesp", "copasa", "cedae", "embasa", "compesa", "corsan", "drenagem", "lixo", "residuos", "coleta seletiva",
    "aterro\\w*", "lixao\\w*", "bueiro\\w*", "alagamento\\w*", "marco do saneamento",
    "sanitation", "sewage", "drinking water", "water supply", "wastewater", "landfill\\w*", "garbage", "waste",
    "saneamiento", "agua potable", "alcantarillado", "basura", "residuos")],
  ["Alimentação e campo", T(
    "fome", "inseguranca alimentar", "seguranca alimentar", "alimentac\\w*", "alimento\\w*", "comida", "cesta basica", "agricultura", "agricultor\\w*", "agricultura familiar", "agroecolog\\w*",
    "agronegocio", "agro", "safra\\w*", "colheita\\w*", "plantio", "soja", "milho", "cafe", "gado", "pecuaria", "agrotox\\w*", "pesca\\w*", "horta\\w*", "assentamento\\w*", "mst",
    "reforma agraria", "embrapa", "conab", "merenda", "restaurante\\w* popula\\w*", "cozinha\\w* solidaria\\w*", "feira\\w* livre\\w*", "feira\\w* organica\\w*",
    "hunger", "food", "farm\\w*", "agricultur\\w*", "crops?", "harvest", "livestock", "fisher\\w*",
    "hambre", "alimentos?", "alimentacion", "agricultura", "agricultores", "cosecha\\w*", "campesinos?")],
  ["Ciência e tecnologia", T(
    "ciencia\\w*", "cientist\\w*", "pesquisa\\w*", "pesquisador\\w*", "estudo\\w*", "descoberta\\w*", "tecnologia\\w*", "inteligencia artificial", "ia", "chatgpt", "openai", "anthropic", "nvidia",
    "google", "apple", "meta platforms", "microsoft", "big techs?", "internet", "redes sociais", "algoritmo\\w*", "dados pessoais", "lgpd", "hacker\\w*", "ataque hacker", "ciberataque\\w*", "seguranca digital",
    "aplicativo\\w*", "celular\\w*", "smartphone\\w*", "5g", "satelite\\w*", "espacial", "estacao espacial", "nasa", "astronom\\w*", "foguete\\w*", "lua", "marte", "robo\\w*", "chip\\w*", "semicondutor\\w*",
    "science", "scientists?", "research\\w*", "study", "artificial intelligence", "ai", "tech", "technology", "software", "cyber\\w*", "space", "rocket\\w*", "satellites?",
    "ciencia", "cientificos?", "investigadores?", "tecnologia", "inteligencia artificial", "espacio")],
  ["Cultura", T(
    "cultura\\w*", "cultural", "arte\\w*", "artista\\w*", "museu\\w*", "exposic\\w*", "cinema", "filme\\w*", "documentario\\w*", "festival\\w*", "musica\\w*", "musico\\w*", "show\\w*", "cantor\\w*",
    "cantora\\w*", "teatro\\w*", "danca", "livro\\w*", "literatura", "escritor\\w*", "escritora\\w*", "poesia", "poeta\\w*", "patrimonio", "carnaval", "samba", "funk", "lei rouanet", "lei paulo gustavo",
    "biblioteca\\w*", "premio\\w*", "games?", "videogame\\w*", "novela\\w*", "series?", "oscar", "bienal", "folclore", "religia\\w*", "papa", "igreja\\w*",
    "culture", "art", "artists?", "museums?", "film\\w*", "movies?", "music\\w*", "books?", "novel\\w*", "theat(?:er|re)", "festival\\w*", "pope",
    "cultura", "artistas?", "museo\\w*", "pelicula\\w*", "musica", "libros?", "teatro", "festival")],
  ["Mundo", T(
    "internacional\\w*", "diplomac\\w*", "diplomat\\w*", "embaixad\\w*", "itamaraty", "chanceler\\w*", "onu", "nacoes unidas", "otan", "g20", "g7", "brics", "mercosul", "uniao europeia", "cupula",
    "guerra\\w*", "conflito\\w*", "cessar-fogo", "cessar fogo", "bombardeio\\w*", "ataque\\w* aere\\w*", "invasao", "tropas", "militar\\w*", "exercito\\w*", "sancoes", "acordo de paz", "soberania", "malvinas", "falklands", "sovereignty",
    "ucrania", "russia", "putin", "zelensky", "gaza", "israel", "palestin\\w*", "hamas", "hezbollah", "iraque", "siria", "libano", "iemen", "venezuela", "maduro", "argentina", "milei",
    "estados unidos", "eua", "trump", "casa branca", "china", "xi jinping", "taiwan", "coreia do norte", "india", "paquistao", "afeganistao", "africa do sul", "europa", "papa leao",
    "war", "ceasefire", "troops", "military", "diplomat\\w*", "united nations", "nato", "sanctions", "invasion", "airstrikes?", "ukraine", "russia", "gaza", "israel", "iran", "china",
    "guerra", "alto el fuego", "tropas", "militares", "naciones unidas", "otan", "sanciones", "invasion", "ucrania", "rusia", "israel", "iran")],
];

const sem = (s: string) => (s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9 \-]+/g, " ").replace(/\s+/g, " ");
const conta = (re: RegExp, t: string) => { re.lastIndex = 0; const m = t.match(re); return m ? new Set(m).size : 0; };
export function temaDe(titulo: string, chamada?: string | null): string {
  const a = " " + sem(titulo) + " ", b = " " + sem(chamada) + " ";
  let melhor = TEMA_OUTROS, max = 0;
  for (const [k, re] of TEMAS_TERMOS) {
    const p = 2 * conta(re, a) + conta(re, b);
    if (p > max) { max = p; melhor = k; }
  }
  return melhor;
}
