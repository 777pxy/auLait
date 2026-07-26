import { apiPost, apiGet } from "../database/database";

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const { name } = body;

  const query = `
    INSERT INTO test(name)
    VALUES(?)
  `;
  const values = [name];

  let status, respBody;
  await apiPost(query, values)
    .then(() => {
      status = 200;
      respBody = { message: "Successfully created article" };
    })
    .catch((err) => {
      status = 400;
      respBody = err;
    });
  return Response.json(respBody, {
    status,
  });
}

export async function GET(req: Request, res: Response) {
  const query = `
    SELECT * from test
  `;

  let status, body;
  try {
    await apiGet(query)
      .then((res) => {
        status = 200;
        body = res;
      })
      .catch((err: Error) => {
        status = 400;
        body = { error: err };
      });
    return Response.json(body, {
      status,
    });
  } catch (error: any) {
    console.error(error.message);
    return Response.json(
      { error: error },
      {
        status: 400,
      },
    );
  }
}
