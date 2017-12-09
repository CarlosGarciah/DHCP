;
; BIND data file for local loopback interface
;
$TTL	604800
@	IN	SOA	cotillas.es. admin.cotillas.es(
			      2		; Serial
			 604800		; Refresh
			  86400		; Retry
			2419200		; Expire
			 604800 )	; Negative Cache TTL
;
@	IN	NS	cotillas.es.
@	IN	A	210.34.2.2
server	IN	CNAME	cotillas.es.
