export default function errorHandler(error, req, res) {
    console.log(error.response.stauts);
    if (error.response) {
        return res.status(error.response.status).send(error.response.message);
    }
    res.sendStatus(500);
}
