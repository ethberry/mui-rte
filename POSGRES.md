# POSTGRES

Here is a sample query which you can use to search over the widget output using psql
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

