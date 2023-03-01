function routes(app) {
    app.get('/healthcheck', (req, res) => { res.sendStatus(200); });
}
export default routes;
//# sourceMappingURL=routes.js.map