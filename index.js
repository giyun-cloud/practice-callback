const onepieceData = `Name,Role,Power
Luffy,Captian,100
Zoro,Subcaptian,95
Sangi,Cooker,95
Nami,Mate,50`;

class MakeObj {
  constructor(source, separater = ",") {
    const rawData = source.split("\n");

    this.headers = rawData[0].split(separater);
    this.rows = rawData
      .filter((_, index) => index > 0)
      .map((row) => row.split(separater));
  }

  row = (index) =>
    this.rows[index].map((row, index) => [this.headers[index], row]);

  get length() {
    return this.rows.length;
  }

  get columnLength() {
    return this.headers.length;
  }
}

class MakeObj2 extends MakeObj {
  make = () => {
    let ary = [];
    for (let i = 0; i < this.rows.length; i++) {
      ary.push(this.row(i).reduce(
        (a, [key, value]) => ({
          ...a,
          [key]: value,
        }),
        {},
      ));
    }
    return ary
  };
}

const data = new MakeObj2(onepieceData);
console.log(data.make());
