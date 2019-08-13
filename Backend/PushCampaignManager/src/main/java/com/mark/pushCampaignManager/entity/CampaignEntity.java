package com.mark.pushCampaignManager.entity;

import java.util.Arrays;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "campaign")
public class CampaignEntity {
	 
	 	@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
		private Long id;
		
		private String title;
		

		private String text;
		
		
		private String vertical;
		
		
		private String icon;
		
		
		private String image;
		
		public CampaignEntity() {
			super();
				
		}

		public CampaignEntity(Long id, String title, String text, String vertical, String icon, String image) {
			super();
			this.id = id;
			this.title = title;
			this.text = text;
			this.vertical = vertical;
			this.icon = icon;
			this.image = image;
		}

		public CampaignEntity(String title, String text, String vertical, String icon, String image) {
			super();
			this.title = title;
			this.text = text;
			this.vertical = vertical;
			this.icon = icon;
			this.image = image;
		}

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getTitle() {
			return title;
		}

		public void setTitle(String title) {
			this.title = title;
		}

		public String getText() {
			return text;
		}

		public void setText(String text) {
			this.text = text;
		}

		public String getVertical() {
			return vertical;
		}

		public void setVertical(String vertical) {
			this.vertical = vertical;
		}

		public String getIcon() {
			return icon;
		}

		public void setIcon(String icon) {
			this.icon = icon;
		}

		public String getImage() {
			return image;
		}

		public void setImage(String image) {
			this.image = image;
		}

		@Override
		public String toString() {
			return "Campaign [id=" + id + ", title=" + title + ", text=" + text + ", vertical=" + vertical  + ","
				//	+ " icon=" + Arrays.toString(icon) + ", image=" + Arrays.toString(image)
					+ 
					"]";
		}
}
