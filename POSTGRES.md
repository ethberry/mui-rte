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

const queryBuilder = this.xxxEntityRepository.createQueryBuilder("xxx");

if (query) {
  const sub = this.xxxEntityRepository.createQueryBuilder("xxx");
  sub.select(raw("id, json_array_elements(xxx.description->'blocks') as blocks"));
  queryBuilder.leftJoinLateral(sub, "elements", { "xxx.id": raw("elements.id") });
  queryBuilder.andWhere(raw("elements.blocks->>'text' ILIKE '%' || ? || '%'", [query]));
  queryBuilder.orWhere(raw("xxx.title ILIKE '%' || ? || '%'", [query]));
}

queryBuilder.getResultAndCount();
```

TypeOrm
```ts
const queryBuilder = this.xxxEntityRepository.createQueryBuilder("xxx");

if (query) {
  queryBuilder.leftJoin(
    qb => {
      qb.getQuery = () => `LATERAL json_array_elements(template.description->'blocks')`;
      return qb;
    },
    "blocks",
    "TRUE",
  );
  queryBuilder.andWhere(
    new Brackets(qb => {
      qb.where("xxx.title ILIKE '%' || :title || '%'", { title: query });
      qb.orWhere("blocks->>'text' ILIKE '%' || :description || '%'", { description: query });
    }),
  );
}

queryBuilder.getManyAndCount();
```
