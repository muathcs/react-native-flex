class validationErrors extends Error{

    constructor(message, field){
        super(message);
        this.name = "validationErrors";
        this.field = field;
        this.statusCode = 400;
    }
}


class NotFoundError extends Error {
    constructor(resource, field){
        super(`${resource} not found`);
        this.name = "NotFoundError";
        this.statusCode = 404;
    }
}

class DatabaseError extends Error {
    constructor(message){
        super(message);
        this.name = "DatabaseError";
        this.statusCode = 500;
    }
}