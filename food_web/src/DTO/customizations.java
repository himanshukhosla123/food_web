package DTO;

public class customizations {
private Integer id;
private Integer max_per_piece;
private String name;
private cutomization_options[] options; 

public Integer getId() {
	return id;
}
public void setId(Integer id) {
	this.id = id;
}
public Integer getMax_per_piece() {
	return max_per_piece;
}
public void setMax_per_piece(Integer max_per_piece) {
	this.max_per_piece = max_per_piece;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public cutomization_options[] getOptions() {
	return options;
}
public void setOptions(cutomization_options[] options) {
	this.options = options;
}

}
