let str = 'Hello world!';

function encryption(string) {
    let mid = Math.floor(string.length / 2);
    let encryptedString = '';
    let left = string.slice(0, mid);
    let right = string.slice(mid, string.length);
    
    for ( let i = 0; i < left.length; i++ ) {
        encryptedString += left[i] + right[i];
    }
    return encryptedString;
}

let encStr = encryption(str);
console.log(`Encrypted string - ${encStr}`);

function decryption(encryptedString) {
    let left = '';
    let right = '';

    for ( let i = 0; i < encryptedString.length; i++) {
        if (i % 2 === 0) {
            left +=encryptedString[i];
        } else {
            right += encryptedString[i];
        }
    }
    
    return left+right;
}
const decStr = decryption(encStr);
console.log(`decrypted string - ${decStr}`);