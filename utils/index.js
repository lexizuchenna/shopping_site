export const generateNum = (length = 6) => {
  var result = "";
  var characters = "0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const checkEmail = (email) => {
  let err = "Invalid Email";
  let at = email.indexOf("@");

  if (email.match(/[!#/\$%^&()+,'"|<>;{}:*=`~]/, "i")) return err;

  if (at === -1) return err;

  let domain = email.substr(email.indexOf("@") + 1);

  if (!domain) return err;

  let suf = domain.indexOf(".");

  if (suf === -1) return err;

  let topLevelDomain = domain.substring(domain.indexOf(".") + 1);

  if (!topLevelDomain || topLevelDomain.length < 2) return err;

  return true;
};

export const phoneFormat = (field) => {
  let previousPhone = "";
  const specialCharCount = (value.match(/\D/g) || []).length;
  let cursorPosition = field.selectionStart;

  let input = value.replace(/\D/g, "");
  const size = input.length;
  if (input.substring(0, 1) == 1) {
    if (size === 0) {
      input = ``;
    } else if (size < 2) {
      input = `+${input} `;
    } else if (size < 4) {
      input = `+${input.substring(0, 1)} (${input.substring(1)}`;
    } else if (size < 8) {
      input = `+${input.substring(0, 1)} (${input.substring(
        1,
        4
      )}) ${input.substring(4)}`;
    }
    // else if (size<16) {input=`+${input.substring(0,1)} (${input.substring(1,4)}) ${input.substring(4,7)}-${input.substring(7,11)}`}
    // else if (size<15) {input=`+${input.substring(0,1)} (${input.substring(1,4)}) ${input.substring(4,7)}-${input.substring(7,11)}`}
  } else {
    if (size > 9 && size < 18) {
      input = `${input.substring(0, 3)}-${input.substring(
        3,
        6
      )}-${input.substring(6, 9)}-${input.substring(9, 14)}`;
    } else if (size > 7 && size < 11) {
      input = `${input.substring(0, 3)}-${input.substring(
        3,
        6
      )}-${input.substring(6)}`;
    } else if (size > 3 && size < 8) {
      input = `${input.substring(0, 3)}-${input.substring(3)}`;
    }
  }

  if (input !== previousPhone) {
    previousPhone = input;
    const specialCharDiff =
      (input.match(/\D/g) || []).length - specialCharCount;
    cursorPosition += specialCharDiff;

    field.value = input;
    field.selectionStart = cursorPosition;
    field.selectionEnd = cursorPosition;

    return input.replace(/[-]/g, "");
  }
};
