function handleError(res, err) {
  res.status(500).send({
    status: 500,
    message: `${err.code} - ${err.message}`,
  });
}
export default handleError;
