# POSTGRES

Here is a sample query which you can use to search over the widget output using psql.

Both of these queries are the same

```sql
SELECT c.*
FROM content c
LEFT JOIN LATERAL json_array_elements(c.form->'blocks') blocks ON TRUE
WHERE blocks->>'text' ILIKE '%hello%'
GROUP BY id;
```

```sql
SELECT c.*
FROM content c, json_array_elements(c.form->'blocks') blocks
WHERE blocks->>'text' ILIKE '%hello%'
GROUP BY id;
```

You can also try it on [sqlfiddle](http://sqlfiddle.com/#!17/ce0faf/1)

https://stackoverflow.com/questions/57891718/postgres-full-text-search-over-json-field
https://stackoverflow.com/questions/19568123/query-for-element-of-array-in-json-column/19868697#19868697

MikroOrm
```ts
import { raw } from "@mikro-orm/core";

const query = "hello";

const queryBuilder = this.contentEntityRepository.createQueryBuilder("content");

const sub = this.contentEntityRepository.createQueryBuilder("content");
sub.select(raw("id, json_array_elements(content.description->'blocks') as blocks"));
queryBuilder.leftJoinLateral(sub, "elements", { "content.id": raw("elements.id") });
queryBuilder.andWhere(raw("elements.blocks->>'text' ILIKE '%' || ? || '%'", [query]));
queryBuilder.orWhere(raw("content.title ILIKE '%' || ? || '%'", [query]));

queryBuilder.getResultAndCount();
```

TypeOrm
```ts
const query = "hello";

const queryBuilder = this.contentEntityRepository.createQueryBuilder("content");

queryBuilder.leftJoin(
  qb => {
    qb.getQuery = () => `LATERAL json_array_elements(content.description->'blocks')`;
    return qb;
  },
  "blocks",
  "TRUE",
);
queryBuilder.andWhere(
  new Brackets(qb => {
    qb.where("content.title ILIKE '%' || :title || '%'", { title: query });
    qb.orWhere("blocks->>'text' ILIKE '%' || :description || '%'", { description: query });
 }),
);

queryBuilder.getManyAndCount();
```
