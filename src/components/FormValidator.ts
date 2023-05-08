const isValidEmail = (email: string): boolean => {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    return regex.test(email);
}

const SignupValidator = (
    firstName: string | undefined,
    lastName: string | undefined,
    email: string | undefined,
    password: string | undefined,
): (string | null) => {
    
    if (!firstName || !firstName.length) {
        return 'First name is required'
    }

    if (!lastName || !lastName.length) {
        return 'Last name is required'
    }

    if (!email || !email.length) {
        return 'Email is required'
    }

    if (!password || !password.length) {
        return 'Password is required'
    }

    if(password.length < 8) {
        return 'Password length must be greater or equal to 8'
    }

    if(!isValidEmail(email)){
        return 'Email is not valid'
    }

    return null
}

const LoginValidator = (
    email: string | undefined,
    password: string | undefined,
): (string | null) => {

    if (!email || !email.length) {
        return 'Email is required'
    }

    if (!password || !password.length) {
        return 'Password is required'
    }

    if(password.length < 8) {
        return 'Password length must be greater or equal to 8'
    }

    if(!isValidEmail(email)){
        return 'Email is not valid'
    }

    return null
}


const FeedbackValidator = (
    title: string | undefined,
    message: string | undefined,
    name: string | undefined,
    fromEmail: string | undefined,
): (string | null) => {

    if (!title || !title.length) {
        return 'Title is required'
    }

    if (!name || !name.length) {
        return 'Name is required'
    }
    if (!fromEmail || !fromEmail.length) {
        return 'Email is required'
    }
    if (!message || !message.length) {
        return 'Message is required'
    }

    if(!isValidEmail(fromEmail)){
        return 'Email is not valid'
    }

    return null
}

const ContentGenerationValidator = (
    content: string,
    contentType: string,
    level: number,
    wordCount: number,
): (string | null) => {

    if(!content || !content.length){
        return 'You have to add some material first'
    }

    if(contentType != 'keyword' && contentType != 'text'){
        return 'Content type is not valid'
    }

    if( !(level >=0 && level <=100) ){
        return 'Level should be in range 0-100'
    }

    if( !(wordCount >=100 && wordCount <= 350) ) {
        return 'Word count should be in range 100 - 350'
    }

    return null
}

const AssessmentGenerationValidator = (
    content: string,
    contentType: string,
    numQuestions: number,
    createQuestions: Array<number | null>,
): (string | null) => {

    let total:number = 0;
    createQuestions.map((val) => {
        if(val != null){
            if(val < 0){
                return 'You cannot enter negative quantity'
            }
            if(val > 20) {
                return 'Cannot generate more than 20 questions of a type'
            }
            total+=val
        }
    })

    if(total <= 0) {
        return 'You must select atleast one type of question'
    }

    if(!content || !content.length){
        return 'You have to add some material first'
    }

    if(contentType != 'keyword' && contentType != 'text'){
        return 'Content type is not valid'
    }

    if( !(numQuestions >=1 && numQuestions <=20) ){
        return 'No of questions should be in range 1-20'
    }


    return null
}

export { SignupValidator, LoginValidator, ContentGenerationValidator, AssessmentGenerationValidator, FeedbackValidator }