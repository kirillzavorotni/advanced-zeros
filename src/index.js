module.exports = function getZerosCount(number, base) {

    var valuesArr = [];
    // находим простые числа входящие в base и записываем в valuesArr на какие из них делится number и сколько раз(степень деления на простое число)
    Outer: for(var i = 2; i <= base; i++){
        for(var j = i-1; j > 1; j--){
            if(i % j == 0){
                continue Outer;
            }
        }

        if(base % i){
            continue;
        }

        var count = 0;
        while(base % i == 0){
            base = base / i;
            count++;
        }

        valuesArr.push({value: i, count: count});
        i = 1;
        continue;
    }
    // находим простые числа входящие в base и записываем в valuesArr на какие из них делится number и сколько раз(степень деления на простое число)

    // Вычисляем кол-во мнножетелей равных простому числу в number(делаем для каждого и выбираем наименьшее из них)
    var minDiv;
    valuesArr.forEach(function(elem){
        var curVal = elem.value;
        var sumDiv = 0;

        while(curVal <= number){
            var curDiv = Math.floor(number / curVal);
            // console.log(curDiv);
            sumDiv += curDiv;
            curVal *= elem.value;
        }

        var divider = Math.floor(sumDiv / elem.count);

        if(!minDiv || (minDiv > divider)){
            minDiv = divider;
        }

    });
    // Вычисляем кол-во мнножетелей равных простому числу в number(делае для каждого и выбираем наименьшее из них)

    return minDiv;
}