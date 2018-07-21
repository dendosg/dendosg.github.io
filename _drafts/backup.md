
        <!-- <section class="post-footer-item read-next">
            {% if page.next.url %}
            <div class="read-next-item">
                <a href="{{ page.next.url }}" class="read-next-link"></a>
                <section>
                    <span>{{ page.next.title }}</span>
                    <p>{{ page.next.excerpt | strip_html | strip_newlines | truncate: 60}}</p>
                </section>
                {% if page.next.cover %}
                <div class="filter"></div>
                <img src="{{ page.next.cover }}" alt=""> {% endif %}
            </div>
            {% endif %} {% if page.previous.url %}
            <div class="read-next-item">
                <a href="{{ page.previous.url }}" class="read-next-link"></a>
                <section>
                    <span>{{ page.previous.title }}</span>
                    <p>{{ page.previous.excerpt | strip_html | strip_newlines | truncate: 60}}</p>
                </section>
                {% if page.previous.cover %}
                <div class="filter"></div>
                <img src="{{ page.previous.cover }}" alt=""> {% endif %}
            </div>
            {% endif %}
        </section> -->


         <div class="post-tags">
                {% if page.tags.size > 0 %} {% for tag in page.tags %} {% for site_tag in site.tags_config %} {% if tag == site_tag.name
                %}
                <a href={{ site_tag.slug | prepend: '/tag/'}} class="post-tag">{{ tag }}</a>
                {% endif %} {% endfor %} {% endfor %} {% endif %}
            </div>