//масссивы
//const arr=[]
//const arr1=new Array() //создание пустых массивов

const arr=[2,4,78,96,78]
const arr1=new Array (23,45,-67,34)//созданеи массивов и элементов ымассивов
console.log(arr)

//доступ к кэлементам массива
const colors=['white', 'red', 'blue', 'green']
console.log (colors[2])

//добавление эленмента путем присвоения
colors[4]='orange'
console.log (colors)
colors[3]='orange'
console.log (colors)

//КОЛИЧЕСТВО ЭЛЕМЕНТОВ МАССИВА
console.log(colors.length)

let x=colors.length
console.log (x)
let y=x-1
colors[x]='white'
console.log (colors)


//пример массива который содержит разные типы данных
const arr2=[5, {name:'василий', age:25}, [5,6,7], true, function(){console.log('welcome')}]
console.log(arr2)
console.log(arr2[1].age)
console.log(arr2[2][2])
arr2[4]()

//массив - объект
const names=['Игорь', 'Даша', 'Сергей']
const copyNames=names //создание копии
copyNames[1]='Савелий'
console.log(names[1]) //изменение значение в оригинальном массиве


//копирваонеи массива
//const cloneNames=names.slice()
//const cloneNames=Array.from (names)

//пароверка является ли переменная массивом
//1
console.log(Array.isArray(names))//true
//2
console.log(names instanceof Array) //true
//3
console.log(names.constructort === Array) //true

//перебор массива 
//1
for (let i=0, length=colors.length; i<length; i++){
console.log (colors[i])
}

//2
colors.forEach ((item)=> {
    console.log(item)
})

//3
for (let item of colors){
    console.log(item)
}
//вывод с индексами
//1
for (let i=0, length=colors.length;i<length;i++){
    console.log(`colors[${i}]=${colors[i]}`)
}
//2
colors.forEach(function(item, index, array){
    console.log(`colors[${index}] = ${item}`)
})

//поиск элементов в массиве
const index=colors.indexOf('blue')
console.log(index)
console.log(colors.lastIndexOf('orange'))
/*
//удаление элементов массива
delete colors[3] //удаление по индексу
console.log(colors)
colors.splice(2,1) //удаление по индексу
console.log(colors)
//удаление по значению
for (let i=0, length=colors.length;i<length;i++){
    if (colors [i] === 'white'){
        colors.splice(i--,1)
    }

}
console.log(colors)*/

const result=colors.filter(value=>value !== 'orange')
console.log(result)

//добавление и удаление элементов
//push() - добавление в окнец массива 
//unshift() - добавление в начало массива
//pop() = удаление послднего элемента
//shift() -удаление певрого элемнта

colors.push('pink', 'grey')
console.log(colors)
colors.push('pink', 'grey')
console.log(colors)
colors.pop()
colors.shift()
console.log(colors)

//функции для работы с массивами
//slice - копирование учаска массива
let colors1 = colors.slice(2,4) //с какого элемерта по какой
console.log(colors1)

//splice - изменение  содержимого массива
//удаление элементов
colors.splice(2,2) //с какого элемента и количество удаляемых элементов
console.log(colors)

//удаление и добавление
colors.splice(1,1,'yellow', 'black')
console.log(colors)

//добавление элементов
colors.splice(0,0, 'yellow', 'black')
console.log(colors)

const str='Клавиатура||мышь||монитор||ОЗУ'
const item=str.split('||')
console.log(items)

//Преобразование массива в строку
let str1=colors.join()
console.log(str1)
let str2=colors.join(" ")
console.log(str2)
let str3=colors.join(", ")
console.log(str3)

//Переворот массива
console.log(colors.reverse())

//Сортровка массива
console.log(colors.sort())
console.log(colors.sort().reverse())

//Ассоциативный массив
const as_r=new Map() //Создание пустого массива
const as_r1=new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3'],
    ['key4', 'value4'],
])

console.log(as_r1)
//Количество элементов
let xy=as_r1.size
console.log(xy)
console.log(as_r1.size)

//Добавление элемента в массив
as_r1.set('key5', 'value5')
console.log(as_r1)
as_r1.set('key7', 'value7')
console.log(as_r1)

//Получение значения по ключу
console.log(as_r1.get('key3'))

//Проверить, имеется ли ключ
console.log(as_r1.has('key6'))
console.log(as_r1.has('key7'))

//Удалить элемент
as_r1.delete('key1')
console.log(as_r1)

//Очистить массив
//  as_r1.clear()
console.log(as_r1.size)

//Перебор элементов
//Перебор ключей
for (let key of colors.keys()){
    console.log(key)

}

//Перебор значений
for (let value of as_r1.values()){
    console.log(value)
}

//Перебор записей массива
for (let pair of as_r1.entries()){
    console.log(pair[0]) //Ключи
    console.log(pair[1]) //Значения
    console.log (`Ключ = ${pair[0]}, значение = ${pair[1]}`) //Ключ 
}

as_r1.forEach(funstion(value, key){
    console.log('key = '+ key+', value = '+value )
    
})

//Объект как ассоциативный массив
//Создание массива как обычный объект
const arr3={}
const arr4=new Object()
const arr5= Object.create(null)

const arr6={
    'key1':'value1',
    'key2':'value2',
    'key3':'value3',
    'key4':'value4',
    'key5':'value5',
    'key6':'value6',
}

//Добавление
arr6['key7']='value7'

//Получение количества ключей
console.log(Object.keys(arr6).length)

//Получение значения ключа
console.log(arr6['key1'])
console.log(arr6['key4'])
console.log(arr6.key3)
console.log(arr6.key5)

//Удаление ключа
delete arr6['key7']
console.log(arr6)

//Проверка наличия ключа
//1
if (arr6.hasOwnProperty('key7')){
    console.log('Ключ существует')
}
else{
    console.log('Ключ не существует')
}
//2
if ('key1' in arr6){
    console.log('Ключ существует')
}
else{
    console.log('Ключ не существует')
}

//Перебор ключей
for (key in arr6){
    console.log (`${key} = $arr6[key]}`)
}