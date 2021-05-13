export const nisMask = (v, value) => {
  //Remove tudo o que não é dígito
  v = v.replace(/\D/g, "");

  if (typeof value !== "undefined") {
    //Coloca ponto entre o segundo e o terceiro dígitos
    v = v.replace(/(\d{3})(\d)/, "$1.$2");

    //Coloca um ponto entre o terceiro e o quarto dígitos
    //de novo (para o segundo bloco de números)
    v = v.replace(/(\d{3})(\d)/, "$1.$2");

    //Coloca um hífen entre o terceiro e o quarto dígitos
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1.$2");
  }

  return v;
};
