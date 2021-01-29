# SQL Queries
*For testing*

**All Media that is audio**
SELECT m.*, t.types_title as type FROM tbl_media as m LEFT JOIN tbl_media_types as t ON m.media_type_id = t.types_id where t.types_title = "audio";


**All Media that is audio that are mature**
SELECT m.*, t.types_title as type FROM tbl_media as m LEFT JOIN tbl_media_types as t ON m.media_type_id = t.types_id where t.types_title = "audio" AND m.media_mature = TRUE;

**All Media that is audio that are mature FROM the 80's**
SELECT m.*, t.types_title as type FROM tbl_media as m LEFT JOIN tbl_media_types as t ON m.media_type_id = t.types_id where t.types_title = "audio" AND m.media_mature = TRUE AND m.media_release < 1990 AND m.media_release > 1980;s