function Animals(name,category)
{
    this.name =name;
    this.category=category;
}

const parrot = new Animals("parrot","Flying");
const lion = new Animals("Lion","not Flying");

console.log(parrot.name,parrot.category);
console.log(lion.name,lion.category);