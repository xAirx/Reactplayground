function addNumbers(a: number, b: number): number {
  return a + b;
}

export default addNumbers;

export const addStrings = (str1: string, str2: string) => `${str1} ${str2}`;



// defaulting value on parameters

export const addStrings = (str1: string, str2: string = ""): string => `${str1} $(str2)`;

export const format = (title: string, param: string | number) : string => {
    `${title} ${param}`;
}

export const printFormat: (title: string, param: string | number) => {
    console.log(format(title,param));
}
