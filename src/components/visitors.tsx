import { db, VercelPoolClient } from "@vercel/postgres";
import Paragraph from "./paragraph";
import { unstable_noStore } from "next/cache";

async function ensureTableExists(client: VercelPoolClient) {
  try {
    await client.sql`
      CREATE TABLE IF NOT EXISTS visitors (
        id SERIAL PRIMARY KEY,
        count INTEGER DEFAULT 0
      );
    `;

    const result = await client.sql`SELECT COUNT(*) FROM visitors`;
    const rowCount = parseInt(result.rows[0].count, 10);
    if (rowCount === 0) {
      await client.sql`INSERT INTO visitors (count) VALUES (0)`;
    }
  } catch (error) {
    console.error(
      "Failed to ensure table exists or insert initial count:",
      error
    );
    throw error;
  }
}

async function updateAndGetVisitorCount() {
  const client = await db.connect();
  try {
    await ensureTableExists(client);

    await client.sql`UPDATE visitors SET count = count + 1 RETURNING count`;
    const result = await client.sql`SELECT count FROM visitors`;
    const count = result.rows.length > 0 ? result.rows[0].count : 0;

    return count;
  } catch (error) {
    console.error("Failed to update or fetch visitors count:", error);
    throw error;
  } finally {
    client.release();
  }
}

const Visitors = () => {
  const count = updateAndGetVisitorCount();
  unstable_noStore();
  return (
    <Paragraph
      paragraphText={
        <span>
          Total Visits: <span className="font-bold">{count}</span> (atleast half
          of them are mine)
        </span>
      }
      paragraphSize="smaller"
      className="text-center"
    />
  );
};

export default Visitors;
