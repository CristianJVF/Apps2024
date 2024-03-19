const longitud = (a) => a.length

const x = longitud("Ana");
console.log(x);

const devuelvePrimeraLetra = (firstletter) => firstletter.charAt(0);

const y = devuelvePrimeraLetra("Ana");
console.log(y);

const devuelveUltimaLetra = (lastletter) => lastletter.charAt(lastletter.length - 1);

const z = devuelveUltimaLetra("carlos");
console.log(z);

const devuelveEnesimaLetra = (n, p) => n.charAt(p);

const w = devuelveEnesimaLetra("carlos", 2);
console.log(w);

const cadena = (n) => n.substring(3, 7);

const k = cadena("Wonderful day");
console.log(k);

const masLarga = (n, m) => n.length >= m.length ? n : m;

const j = masLarga("super", "corazon");
console.log(j);

const masLarga2 = (n, m, p) => {
    const uno = n;
    const dos = m;
    const tres = p;

    if (n.length > m.length && n.length > p.length) {
        return n;
    } else if (m.length > n.length && m.length > p.length) {
        return m;
    } else if (p.length > n.length && p.length > m.length) {
        return p;
    } else {
        return "No hay una mas larga"
    }
}

const l = masLarga2("super", "corazon", "corazon");
console.log(l);

const generarNombre = (a, b, c) => {
    if (a.length < 5 || b.length < 5 || c.length < 5) {
        return "error"
    } else {
        return a.substring(0, 3) + b.substring(0, 3) + c.substring(0, 3)
    }
}

const h = generarNombre("azulado", "verde", "enano");
console.log(h);




const generarNombre2 = (a, b, c) => {
    if (a.length < 5 || b.length < 5 || c.length < 5) {
        return "error"
    } else {
        return a.charAt(a.length - 1) + b.charAt(b.length - 1) + c.charAt(c.length - 1);
    }
}

const g = generarNombre2("azulado", "verde", "enano");
console.log(g);

const generarNombre3 = (a, b, c) => {
    if (a.length < 5 || b.length < 5 || c.length < 5) {
        return "error"
    } else {
        return a.substring(a.length - 3) + b.substring(b.length - 3) + c.substring(c.length - 3)
    }
}

const i = generarNombre3("azulado", "verde", "enano");
console.log(i);

const tieneLetra = (a, b) => {

}

const aa = tieneLetra("carlos", "r");
console.log(aa);

