
module.exports = (schema) => {
    return (req, res, next) =>{

        const {body, query} = req;

        if(schema.query) {
            let validation = schema.query.validate(query)
            if (validation.error) {
                try {
                  return res
                    .status(400)
                    .json({ error: validation.error.details[0].message });
                } catch (error) {
                  return res.status(400).json({ error:'Invalide Parameter' });
                }
              }
        }

        if (schema.body) {
            let validation = schema.body.validate(body);
            if (validation.error) {
              try {
                return res
                  .status(400)
                  .json({ error: validation.error.details[0].message });
              } catch (error) {
                return res.status(400).json({ error: 'Invalide Parameter' });
              }
            }
          }
          next();

    }
}