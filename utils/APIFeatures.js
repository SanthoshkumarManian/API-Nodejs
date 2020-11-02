class APIFeatures{
    constructor(query,queryString){
        this.query=query;
        this.queryString=queryString;
    }

    filter(){
        const queryObj={...this.queryString}
        const excludeQuery=['filter','sort','page','limit'];
        excludeQuery.forEach(el=>delete queryObj[el]);
        
        let queryStr=JSON.stringify(queryObj);
        console.log(queryStr);
        queryStr=queryStr.replace(/\b(lt|lte|gt|gte)\b/g, match =>`$${match}`);

        this.query.find(JSON.parse(queryStr))
        return this;
    }

    sort(){
        if(this.queryString.sort){
            const sortby=this.queryString.sort.split(',').join(' ');
            this.query=this.query.sort(sortby);
         }else{
             this.query=this.query.sort('-createdAt');
         }
         return this;
    }

    pagination(){
        this.query=this.query.skip(this.queryString.page  * 1).limit(this.queryString.limit * 1);
        return this;
    }

}

module.exports=APIFeatures;