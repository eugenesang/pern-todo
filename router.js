
function handleRoutes (app){

    app.get("/", (req, res)=>{
        res.json({
            success: 1,
            message: "Server connected successfully"
        })
    })
}

module.exports = handleRoutes;