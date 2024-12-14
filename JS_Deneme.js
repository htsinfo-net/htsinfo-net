// Dinamik olarak bir <style> elemanı oluştur
const style = document.createElement('style');
style.type = 'text/css';

// Stil kurallarını oluştur
style.innerHTML = `
.square_2 {
    width: 100px;
    height: 600px;
    flex-shrink: 0;
    border-radius: 50px;
    background: #000;
    float: left;
    margin-top: 10%;
    margin-left: 20%;
}

.square_3 {
    width: 100px;
    height: 300px;
    transform: rotate(90deg);
    flex-shrink: 0;
    border-radius: 50px;
    background: #D9D9D9;
    margin-top: 17%;
    margin-left: 100px;
    float: left;
}

.square_4 {
    width: 100px;
    height: 600px;
    flex-shrink: 0;
    border-radius: 50px;
    background: #000;
    float: left;
    margin-top: 10%;
    margin-left: 100px;
}

.parent {
    width: 400px;
    height: 600px;
    flex-shrink: 0;
    float: left;
    margin-top: 10%;
    margin-left: 20%;
}

.child_1 {
    width: 100px;
    height: 600px;
    flex-shrink: 0;
    border-radius: 50px;
    background: #000;
    float: left;
}

.child_2 {
    width: 100px;
    height: 300px;
    transform: rotate(44.5deg);
    flex-shrink: 0;
    border-radius: 50px;
    background: #D9D9D9;
    float: left;
    margin-left: 100px;
}

.child_3 {
    width: 100px;
    height: 300px;
    transform: rotate(-44.5deg);
    flex-shrink: 0;
    border-radius: 50px;
    background: #D9D9D9;
    float: left;
    margin-left: 100px;
}

.rotated-text {
    color: white;
    transform: rotate(90deg);
    padding-left: 100px;
}
`;

// Stil kurallarını <head> etiketine ekle
document.head.appendChild(style);

// HTML öğeleri oluşturma ve sınıfları uygulama
const parentDiv = document.createElement('div');
parentDiv.classList.add('parent');

const square2 = document.createElement('div');
square2.classList.add('square_2');

const square3 = document.createElement('div');
square3.classList.add('square_3');

const square4 = document.createElement('div');
square4.classList.add('square_4');

const child1 = document.createElement('div');
child1.classList.add('child_1');

const child2 = document.createElement('div');
child2.classList.add('child_2');

const child3 = document.createElement('div');
child3.classList.add('child_3');

// Oluşturulan elemanları DOM'a ekleme
parentDiv.appendChild(child1);
parentDiv.appendChild(child2);
parentDiv.appendChild(child3);

document.body.appendChild(square2);
document.body.appendChild(square3);
document.body.appendChild(square4);
document.body.appendChild(parentDiv);
