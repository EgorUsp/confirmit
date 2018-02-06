function main() {

    var
        result,
        longText,
        widthText;

    longText = document.getElementById('longText').value;
    widthText = +document.getElementById('widthText').value;

    result = justify(longText, widthText);

    document.getElementById('result').innerHTML = result.join('\n');
}
//Получаем введённый тект и необходимую ширину текста
//выравнивает текст по нужной ширине
function justify(text, width) {
    var
        resultText = [],
        string = [],
        splitText = text.split(' ');

    for (var i = 0; i < splitText.length; i++) {
        var stringLength = string.join(' ').length + splitText[i].length;
        if (stringLength < width) {
            string.push(splitText[i]);
        }
        else {
            if (string.join(' ').length < width) {
                string = spaceStr(string, width);
            }
            resultText.push(string.join(' '));
            string = [];
            i--;
        }
    }
    resultText.push(string.join(' '));

    return resultText;

}
//Получает массив из слов строки и ширину
//Добавляет между словами пробелы, пока не получится нужная ширина
function spaceStr(str, width) {

    while (str.join(' ').length < width) {
        for (var i = 0; i < str.length - 1; i++) {
            if (str.join(' ').length < width) {
                str[i] += ' ';
            } else {
                break;
            }
        }
    }

    return str;
}