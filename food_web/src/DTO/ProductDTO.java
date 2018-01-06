package DTO;

import java.util.ArrayList;

public class ProductDTO {
	private int _id;
	private int id;
	private String title;
	private double price;
	private double[] category;
	private double tax;
	private boolean customized;
	private int default_cat;
	private customizations[] customization_type;

	public Integer get_id() {
		return _id;
	}

	public void set_id(Integer _id) {
		this._id = _id;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public double[] getCategory() {
		return category;
	}

	public void setCategory(double[] category) {
		this.category = category;
	}

	public Double getTax() {
		return tax;
	}

	public void setTax(Double tax) {
		this.tax = tax;
	}

	public Boolean getCustomized() {
		return customized;
	}

	public void setCustomized(Boolean customized) {
		this.customized = customized;
	}

	public int getDefault_cat() {
		return default_cat;
	}

	public void setDefault_cat(int default_cat) {
		this.default_cat = default_cat;
	}

	public customizations[] getCustomization_type() {
		return customization_type;
	}

	public void setCustomization_type(customizations[] customization_type) {
		this.customization_type = customization_type;
	}
}
