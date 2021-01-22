function getPassword() {
    /* criação da função de gerar senha */
    let chars =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*^()_+?><:[]"; /* definimos quais caracteres estarão na senha */
    let passwordLength = 16; /* definimos o tamanho da senha */

    let password = ""; /*  */

    for (i = 0; i < passwordLength; i++) {
      /* criamos um for para percorrer a string */
      let randomNumber = Math.floor(
        Math.random() * chars.length
      ); /* definimos que a senha será aleatória usando os caracteres que estão na let char. Está gerando o índice. Está multiplicando o math.flor pelo chars.length para que o maior número gerado seja o maior número da let chars*/
      password +=
        chars[
          randomNumber
        ]; /*pega a letra que ele acabou de gerar e coloca na let password*/
    }
    document.getElementById(
      "password"
    ).value = password; /* pega o elemento que tem o ID password no HTML e coloca o valor dele dentro da let password*/
  }