// Задание 1 парсин XML

const parser = new DOMParser(); // Экземпляр класса DOMParser который будет парчить нужный XML
const XMLstr = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;
// парсинг XML
const DOMxml = parser.parseFromString(XMLstr, 'text/xml');
// Получение DOM-нод
const ListNode = DOMxml.querySelector('list');
const StudNode = [... ListNode.querySelectorAll('student')];
////
//Создаем пустой массив для записи объектов
const list =[];
StudNode.forEach(StudNode => {                        // переберем каждый элемент массива с помощью стрелочной функции
    const NameNode = StudNode.querySelector('name')
    const FstStudName = StudNode.querySelector('first');
    const SecndStudName= StudNode.querySelector('second');
    const LangAtr = NameNode.getAttribute("lang");
    const StudAge = StudNode.querySelector('age');
    const StudProf = StudNode.querySelector('prof');
    //Добавим элементы в конец массива
    list.push({
        name:`${FstStudName.textContent} ${SecndStudName.textContent}`,
        age: StudAge.textContent,
        prof: StudProf.textContent,
        lang: LangAtr
    });
});

const  PursserResult = {
    list: list
};
console.log('result', PursserResult)

// **Задание 2 парсинг JSON**

// JSON, который будет парсится

const jsonString = `
{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }
`;

// Получение данных
const data = JSON.parse(jsonString);

const list = data.list;
// console.log('list', list);


const list_result = []; // Создаем пустой массив

list_result.push(list); // В пустой массив добавляем список из объектов
// console.log(list_result);

const result = {
    list: list_result
}

console.log(result);