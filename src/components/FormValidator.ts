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

    if( !(wordCount >=100 && wordCount <= 250) ) {
        return 'Word count should be in range 100 - 250'
    }

    return null
}

const AssessmentGenerationValidator = (
    content: string,
    contentType: string,
    numQuestions: number,
    questionType: string,
): (string | null) => {

    if(!content || !content.length){
        return 'You have to add some material first'
    }

    if(contentType != 'keyword' && contentType != 'text'){
        return 'Content type is not valid'
    }

    if( !(numQuestions >=1 && numQuestions <=20) ){
        return 'No of questions should be in range 1-20'
    }

    if(!questionType || !['mcqs','true_false','comprehensive','fillinblanks'].includes(questionType) ) {
        return 'You must select a question type'
    }

    return null
}

export { SignupValidator, LoginValidator, ContentGenerationValidator, AssessmentGenerationValidator }