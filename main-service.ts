export interface StringManipulationService{
    print(word:string):void;
    printWithSpace(sentence:string):void;
    findvowel(str:string):void;
}
export interface NumberManipulationService{
    findPrime(num:number): void;
    findMagic(num:number): void;
}