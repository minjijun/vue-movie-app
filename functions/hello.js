exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify ({
            name: "Heropy",
            age: 85,
            email: "minji.jun.85@gmail.com"
        })
    }
}