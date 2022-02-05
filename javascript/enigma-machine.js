function rotor(message, rotor){
    let static_wheel = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1',
        '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', ' '];

    let setting_letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3',
        '4', '5', '6', '7', '8', '9', '0', '.', ' '];
     
    let scrambler = {'A': 'T', 'B': 'U', 'C': 'V', 'D': 'W', 'E': 'X', 'F': 'Y', 'G': 'Z',
        'H': '1', 'I': '2', 'J': '3', 'K': '4', 'L': '5', 'M': '6', 'N': '7', 'O': '8',
        'P': '9', 'Q': '0', 'R': '.', 'S': ' ', 'T': 'A', 'U': 'B', 'V': 'C', 'W': 'D',
        'X': 'E', 'Y': 'F', 'Z': 'G', '1': 'H', '2': 'I', '3': 'J', '4': 'K', '5': 'L',
        '6': 'M', '7': 'N', '8': 'O', '9': 'P', '0': 'Q', '.': 'R', ' ': 'S'};
    
    for (let i = 1; i < rotor; i++){
        setting_letters.unshift(setting_letters[37]);
        setting_letters.pop(38);
    };

    let encrypted_message = '';

    for (let i = 0; i < message.length; i++){
        let number = static_wheel.indexOf(message[i]);
        let letter = setting_letters[number];
        encrypted_message = encrypted_message + scrambler[letter];
        setting_letters.unshift(setting_letters[37]);
        setting_letters.pop(38);
    };
        
    return encrypted_message;
}

function reflector(message){
    let scrambler = {'A':' ', 'B':'.', 'C':'0', 'D':'9', 'E':'8', 'F':'7', 'G':'6',
        'H':'5', 'I':'4', 'J':'3', 'K':'2', 'L':'1', 'M':'Z', 'N':'Y', 'O':'X',
        'P':'W', 'Q':'V', 'R':'U', 'S':'T', 'T':'S', 'U':'R', 'V':'Q', 'W':'P',
        'X':'O', 'Y':'N', 'Z':'M', '1':'L', '2':'K', '3':'J', '4':'I', '5':'H',
        '6':'G', '7':'F', '8':'E', '9':'D', '0':'C', '.':'B', ' ':'A'}

    let encrypted_message = ''

    for (let i = 0; i < message.length; i++){
        let letter = message[i];
        encrypted_message = encrypted_message + scrambler[letter];
    };

    return encrypted_message
}

function encrypt(){
    let message = document.getElementById('message_input').value;
    let rotor1 = parseInt(document.getElementById('rotor1').value);
    let rotor2 = parseInt(document.getElementById('rotor2').value);
    let rotor3 = parseInt(document.getElementById('rotor3').value);

    if(rotor1 <= 0 || rotor1 >= 38){
        document.getElementById('rotor1').value = '';
        document.getElementById('message_output').value = '"' + rotor1 + '"' + ' is not a valid number.';
    }
    else if(rotor2 <= 0 || rotor2 >= 38){
        document.getElementById('rotor2').value = '';
        document.getElementById('message_output').value = '"' + rotor2 + '"' + ' is not a valid number.';
    }
    else if(rotor3 <= 0 || rotor3 >= 38){
        document.getElementById('rotor3').value = '';
        document.getElementById('message_output').value = '"' + rotor3 + '"' + ' is not a valid number.';
    }
    else{
        message = message.toUpperCase();
        
        message = rotor(message, rotor1);
        message = rotor(message, rotor2);
        message = rotor(message, rotor3);
        message = reflector(message);

        document.getElementById('message_output').value = message;
    }
}

document.getElementById('encrypt').addEventListener('click', encrypt);


let date = new Date();
let year = date.getFullYear();
document.getElementById('year').innerHTML = year;