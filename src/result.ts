class Result {
    constructor(public result :string,public from :string,public to :string,public event :string){
        
    }
    toString(){
        this.result + " is convert from " + this.from + " to " + this.to; 
    }
}

class TransformResult extends Result{
    public event :string;
    constructor(result :string,from :string,to :string){
        super(result,from,to,"transform");
    }
}

class SeparateResult extends Result{
    public event :string;
    constructor(result :string,from :string,to :string,separate: string){
        super(result,from,to,`separate,${separate}`)
    }
}

class MarkResult extends Result{
    public event :string;
    constructor(result :string,from :string,to :string,leftEdge :string,rightEdge: string,separate: string){
        super(result,from,to,`mark,${leftEdge},${rightEdge},${separate}`);
    }
}

export default Result;
export { Result , TransformResult ,  SeparateResult , MarkResult }