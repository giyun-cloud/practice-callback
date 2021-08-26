type Obj = {
  num: number;
  str: string;
}

function func1<T>(params:T): T {
  return params
}

func1({num:1,str:1})
// func1<Obj>({num:1,str:1})
func1<Obj>({num:1,str:"1"})

const func2 = <T,B>(aa:T,bb:B):T => {
  return aa
}
