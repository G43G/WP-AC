<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/rss">
    <html>
		<head>
		</head>
		<body>
			<div style="background-color: #C3C3C3; text-align: center; border: 2px solid #000000; padding: 10px;">
				<xsl:element name="a">
					<xsl:attribute name="href">
						<xsl:value-of select="channel/link"/>
					</xsl:attribute>
					<xsl:value-of select="channel/title"/>
				</xsl:element>
			</div>
			<div style="border: 1px solid #000000; background-color:#D9DCDD; margin: auto; margin-top: 25px; padding: 10px;">
				<div>
					<xsl:value-of select="channel/description"/>
				</div>
				<dl>
                <xsl:for-each select="channel/item">
					<dd>
						<xsl:element name="a">
							<xsl:attribute name="href">
								<xsl:value-of select="link"/>
							</xsl:attribute>
								<xsl:value-of select="title"/>
						</xsl:element>
					</dd>
					<dt>
						<xsl:value-of select="description"/><br/>
						<span><xsl:value-of select="date"/></span>
					</dt>
				</xsl:for-each>
				</dl>
			</div>
		</body>
    </html>
</xsl:template>
</xsl:stylesheet>