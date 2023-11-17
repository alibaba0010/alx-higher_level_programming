#!/usr/bin/python3
"""Lists states"""

import MySQLdb
from sys import argv

if __name__ == "__main__":
    conn = MySQLdb.connect(host="localhost", port=3306, user=argv[1],
                           passwd=argv[2], db=argv[3], charset="utf8")
    curs = conn.cursor()
    curs.execute("SELECT * FROM states WHERE name = %s ORDER BY states.id ASC",
                 (argv[4], ))
    query_rows = curs.fetchall()
    for rows in query_rows:
        print(rows)
    curs.close()
    conn.close()
