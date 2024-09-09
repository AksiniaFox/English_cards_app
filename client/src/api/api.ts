

//сервер

export interface Translation {
  head: string
  word: string;
  type: string;
  example: string;
  description: string;
  translation_head: string;
  translation_word: string;
  translation_type: string;
  translation_example: string;
  translation_description: string;
}

export const translations: Translation[] = [
  {head:'Word of the day', word: 'benevolent', type: 'adjective',description:'well meaning and kindly', example: '"a benevolent smile"', translation_head: 'Слово Дня', translation_word: 'добрый', translation_type: 'прилагательное', translation_example: '"добрая улыбка"', translation_description:'хороший и доброжелательный' },
  {head:'Word Highlight', word: 'altruistic', type: 'adjective', description:'showing a selfless concern for the well-being of others', example: '“an altruistic act”', translation_head: 'Выделение слов', translation_word: 'альтруистический', translation_type: 'прилагательное', translation_example: '“альтруистический поступок”', translation_description:'проявление бескорыстной заботы о благополучии других' },
  {head:'Featured Word', word: 'compassionate', type: 'adjective', description:'feeling or showing sympathy and concern for others', example: '“a compassionate gesture”', translation_head: 'Избранное слово', translation_word: 'сострадательный', translation_type: 'прилагательное', translation_example: '“сострадательный жест”', translation_description:'проявление сочувствия и заботы о других' },
  {head:'Word of the Moment', word: 'generous', type: 'adjective', description:'showing a readiness to give more of something than is strictly necessary or expected', example: '“a generous donation”', translation_head: 'Слово момента', translation_word: 'щедрый', translation_type: 'прилагательное', translation_example: '“щедрое пожертвование”', translation_description:'проявление готовности дать больше, чем строго необходимо или ожидается' },
  {head:'Daily Word', word: 'gracious', type: 'adjective', description:'courteous, kind, and pleasant', example: '“a gracious host”', translation_head: 'Ежедневное слово', translation_word: 'любезный', translation_type: 'прилагательное', translation_example: '“любезный хозяин”', translation_description:'вежливый, добрый и приятный' },
  {head:'Word of the Week', word: 'humane', type: 'adjective', description:'having or showing compassion or benevolence', example: '“a humane treatment”', translation_head: 'Слово недели', translation_word: 'гуманный', translation_type: 'прилагательное', translation_example: '“гуманное обращение”', translation_description:'проявление сострадания или доброжелательности' },
  {head:'Word Focus', word: 'kindhearted', type: 'adjective', description:'having a kind and sympathetic nature', example: '“a kindhearted person”', translation_head: 'Фокус на словах', translation_word: 'добросердечный', translation_type: 'прилагательное', translation_example: '“добросердечный человек”', translation_description:'имеющий добрую и сочувствующую натуру' },
  {head:'Word Insight', word: 'magnanimous', type: 'adjective', description:'generous or forgiving, especially towards a rival or less powerful person', example: '“a magnanimous gesture”', translation_head: 'Понимание слов', translation_word: 'великодушный', translation_type: 'прилагательное', translation_example: '“великодушный жест”', translation_description:'щедрый или прощающий, особенно по отношению к сопернику или менее могущественному человеку' },
  {head:'Word Pick', word: 'philanthropic', type: 'adjective', description:'seeking to promote the welfare of others, especially by donating money to good causes', example: '“a philanthropic organization”', translation_head: 'Выбор слов', translation_word: 'благотворительный', translation_type: 'прилагательное', translation_example: '“благотворительная организация”', translation_description:'стремление способствовать благополучию других, особенно путем пожертвования денег на благие цели' },
  {head:'Word Choice', word: 'sympathetic', type: 'adjective', description:'feeling, showing, or expressing sympathy', example: '“a sympathetic listener”', translation_head: 'Выбор слов', translation_word: 'сочувствующий', translation_type: 'прилагательное', translation_example: '“сочувствующий слушатель”', translation_description:'чувствующий, проявляющий или выражающий сочувствие' },
  {head:'Word Selection', word: 'charitable', type: 'adjective', description:'relating to the assistance of those in need', example: '“a charitable foundation”', translation_head: 'Выбор слов', translation_word: 'благотворительный', translation_type: 'прилагательное', translation_example: '“благотворительный фонд”', translation_description:'относящийся к помощи нуждающимся' },
  {head:'Word Spotlight', word: 'considerate', type: 'adjective', description:'careful not to cause inconvenience or hurt to others', example: '“a considerate neighbor”', translation_head: 'Обзор слов', translation_word: 'внимательный', translation_type: 'прилагательное', translation_example: '“внимательный сосед”', translation_description:'старающийся не причинять неудобства или вреда другим' },
  {head:'Word Feature', word: 'cordial', type: 'adjective', description:'warm and friendly', example: '“a cordial greeting”', translation_head: 'Особенности слов', translation_word: 'радушный', translation_type: 'прилагательное', translation_example: '“радушное приветствие”', translation_description:'теплый и дружелюбный' },
  {head:'Word of the Day', word: 'benevolent', type: 'adjective', description:'well meaning and kindly', example: '“a benevolent smile”', translation_head: 'Слово Дня', translation_word: 'добрый', translation_type: 'прилагательное', translation_example: '“добрая улыбка”', translation_description:'хороший и доброжелательный' },
  {head:'Word of the Day', word: 'generous', type: 'adjective', description:'showing a readiness to give more of something than is strictly necessary or expected', example: '“a generous donation”', translation_head: 'Слово Дня', translation_word: 'щедрый', translation_type: 'прилагательное', translation_example: '“щедрое пожертвование”', translation_description:'проявление готовности дать больше, чем строго необходимо или ожидается' },

];

export default async function serverAuth(email:string, password:string){

  if (email !== 'admin') return false
  if (password !== 'admin') return false
  return true

}